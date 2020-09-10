"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var url = 'mongodb://localhost:27022';
var dbName = 'myproject';
var databaseClient = null;
var getDBClient = function () {
    return new Promise(function (resolve, reject) {
        if (databaseClient) {
            console.log('using previous instance');
            resolve(databaseClient);
        }
        else
            mongodb_1.MongoClient.connect(url, function (err, client) {
                if (err)
                    reject(JSON.stringify(err));
                console.log("Connected - Client Created");
                databaseClient = client.db(dbName);
                resolve(databaseClient);
            });
    });
};
exports.default = getDBClient;
