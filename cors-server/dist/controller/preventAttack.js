"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClickJacking = exports.getClickJacking = exports.getDataXss = void 0;
function getDataXss(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.query;
        try {
            const data = 'bukan untuk umum';
            res.send(`hello ${name}`);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getDataXss = getDataXss;
function getClickJacking(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(`
        <form action="/click-jacking" method="post">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <input type="submit" value="Submit">
        </form>
        `);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getClickJacking = getClickJacking;
function createClickJacking(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let username = req.body.username;
            let password = req.body.password;
            res.json({ username: username, password: password });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createClickJacking = createClickJacking;
