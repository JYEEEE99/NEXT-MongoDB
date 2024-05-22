import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin990914:admin990914@cluster0.4s8btgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  connectDB = global._mongoClientPromise;
} else {
  client = new MongoClient(url, options);
  connectDB = client.connect();
}

export default connectDB;
