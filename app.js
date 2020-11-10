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
    res.setHeader("Content-Type","text/event-stream");
    dummyData(res);
});
let i = 0;
function dummyData(res) {
    res.write("data: " + `I am new ${i} data\n\n`);
    i++;
    setTimeout(() => dummyData(res), 1000);
}