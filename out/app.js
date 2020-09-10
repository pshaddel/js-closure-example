"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./users"));
var app = express_1.default();
app.use(users_1.default);
app.get('/ping', function (req, res) {
    res.send('pong...');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
