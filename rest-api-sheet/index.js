const express = require('express');
const app = express();

app.listen(8080);

app.get('/', async (req, res) => {
  var hours; 
  // this is where you get the return value
  getJson( function(data) { hours = data });
  res.setHeader('Content-Type', 'application/json');
  let retVal;
  if (hours) {
    retVal = {status: 'success', data: {hours: hours}};
    console.log(retVal)
  } else {
    res.status(404);
    retVal = {status: 'fail', data: {title: `hours not found`}};
  }
  res.json(hours);
});

function getJson( callback ) {

  https.get('https://sheets.googleapis.com/v4/spreadsheets/1qObCPH0-8zxjvG5KcbmT2iMk40KffE1LPhj0UhBFDh8/values/Sheet1?key=AIzaSyBZ95WJEcD7pL8QD83EyAsWSWTxoqQo2Cc', (res) => {
  console.log('statusCode:', res.statusCode);

    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            callback(json);
        } catch (error) {
            console.error(error.message);
        };
    });

  }).on('error', (e) => {
    console.error(e);
  });
}
