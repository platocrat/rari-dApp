import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://platocrat:${ process.env.REACT_APP_MONGODB_PASSWORD }@cluster0.dnilu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
