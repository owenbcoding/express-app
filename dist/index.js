"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = require("fs");
const app = (0, express_1.default)();
const port = 8080 || process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
let data = { id: 1 };
app.get("/", (req, res) => {
    res.send("Im working");
    fs.appendFile('data.json', JSON.parse('data'), function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
});
app.get("/test", (req, res) => {
    console.log(req.body.id, req.params);
    fs.readFile('data.json', function (err, data) {
        res.send(Buffer.from(data).toString());
    });
});
// make server start brrt'ing //
app.listen(port, "0.0.0.0", () => {
    console.log(`server started at http://localhost:${port}`);
});
