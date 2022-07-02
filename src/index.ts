import express, { request } from "express";
import fs = require('fs');

const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let data = {id : 1}

app.get("/", (req,res) => {
    res.send("Im working")
    fs.appendFile('data.json', JSON.parse('data'), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})

app.get("/test", (req,res) => {
    console.log(req.body.id,req.params)
    fs.readFile('data.json', function(err, data) {
        res.send(Buffer.from(data).toString())
    })
})

// make server start brrt'ing //
app.listen(port,"0.0.0.0", () => {
    console.log(`server started at http://localhost:${port}`);
});