import { MongoClient, MongoError, Db } from 'mongodb';
const url = 'mongodb://localhost:27022';
const dbName = 'myproject';

let databaseClient:Db|null = null;
class Connection {
    private static databaseClient:Db|null = null;

    constructor() {
    }

    public static getInstance() {
        if (this.databaseClient) {
            return databaseClient;
        } else {

        }
    }

}
const getDBClient = () => {
  return new Promise<Db>((resolve, reject)=> {
    if(databaseClient) {
      console.log('using previous instance')
      resolve(databaseClient);
    }
    else
      MongoClient.connect(url, function(err:MongoError, client:MongoClient) {
        if (err) reject(JSON.stringify(err));
        console.log("Connected - Client Created");
        databaseClient = client.db(dbName);
        resolve(databaseClient);
      });
  })
}

export default getDBClient;