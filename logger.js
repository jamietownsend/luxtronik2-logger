import config from 'config';
import cron from 'cron';
import luxtronik from 'luxtronik2';
import mongodb from 'mongodb';
import moment from 'moment';

const { MongoClient } = mongodb

const HOST = config.get("luxtronic.host");
const PORT = config.get("luxtronic.port");

const mongoDbConnectionStringOrig = config.get("mongoDB.connectionString");
const mongoDbConnectionString = mongoDbConnectionStringOrig
    .replace("<username>", config.get("mongoDB.username"))
    .replace("<password>", config.get("mongoDB.password"));

const logDevice = { id: config.get("device.id"), description: config.get("device.description") };

console.log(mongoDbConnectionStringOrig);

async function logToMongo(data) {
    const client = new mongodb.MongoClient(mongoDbConnectionString);
    const dbName = "SmartHomeLog2";

    try {
        await client.connect();
        const db = client.db(dbName);
        const filter = { id: logDevice.id };
        db.collection("Device").updateOne(filter, { $set: { logDevice } }, { upsert: true })
        // Use the collection <logDevice.id>
        const collection = db.collection(logDevice.id);
        // Construct a logEntry                                                                                                                                                              
        const logEntry = { moment: moment.now(), dateTime: new Date().toISOString(), data: data }
        // Insert a single document, wait for promise so we can read it back
        const promise = await collection.insertOne(logEntry);
        // Find one document
        const myDoc = await collection.findOne();
        // Print to the console
        console.log(JSON.stringify(logEntry, null, "  "));
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

var job = new cron.CronJob('* * * * *', function () {
    const pump = luxtronik.createConnection(HOST, PORT);

    pump.read(function (err, data) {
        logToMongo(data).catch(console.dir);

        if (err) {
            return console.log(err);
        }
        console.log(moment().format() + " successfully logged");
    });

}, null, true);
