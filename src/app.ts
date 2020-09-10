import express from 'express';
import users from './users';

const app: express.Application = express();

app.use(users);

app.get('/ping', function (req: express.Request, res: express.Response) {
    res.send('pong...');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});