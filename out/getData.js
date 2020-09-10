"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connection_1 = __importDefault(require("./connection"));
var router = express_1.default.Router();
router.get('/users', function (req, res) {
    var _a;
    (_a = connection_1.default()) === null || _a === void 0 ? void 0 : _a.collection('users').insertOne({
        name: 'poorshad',
        family: 'shaddel',
        age: 29
    }).then(function (res) {
        console.log('res:', res);
    }).catch(function (err) {
        console.error(err);
    }).finally(function () {
        res.send('users is inserted');
    });
});
exports.default = router;
