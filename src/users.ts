import express from 'express';
import getDBClient from './connection';
import {Db} from 'mongodb';
const router = express.Router();

router.get('/users', async (req: express.Request, res: express.Response)=> {
    const connection:Db = await getDBClient();
    const result = await connection.collection('users').find({
    }).toArray()
    res.json(result)
})

export default router;