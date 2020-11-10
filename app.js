const express = require('express'),
    app = express(),
    server = app.listen(1000);

app.use(express.static('public'));

console.log('server running');

app.get("/", (req, res) => {
    res.send(); 
});

/*This is the server event sent to client*/
app.get("/stream", (req, res) => {
    /*to enable the sever sent event, header must be sets*/
    res.setHeader("Content-Type","text/event-stream");
    dummyData(res);
});

/* Fake data provider */
let i = 0;
function dummyData(res) {
    res.write("data: " + `I am new ${i} data\n\n`);
    setTimeout(() => dummyData(res), 1000);
    i++;
}