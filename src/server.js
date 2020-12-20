const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.listen(3030, () => {
    console.log("App running on port 3030");
});

app.use(bodyParser.json());


module.exports = app