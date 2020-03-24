const express = require('express');
const https = require('https')
const app = express();

app.listen(8080);



//   return {
//     'id': '1',
//     'name': 'Snohomish Store',
//     'warehouseLocation': 'Snohomish, WA',
//     'ZIP': '98290',
//     'date': '3/24/2020'
//   };



async function getHours() {
  var data
  const options = {
    hostname: 'sheets.googleapis.com',
    port: 443,
    path: '/v4/spreadsheets/1qObCPH0-8zxjvG5KcbmT2iMk40KffE1LPhj0UhBFDh8/values/Sheet1?key=AIzaSyBZ95WJEcD7pL8QD83EyAsWSWTxoqQo2Cc',
    method: 'GET'
  };

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
      process.stdout.write(d);

      app.get('/', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        let retVal;
        if (hours) {
          retVal = {status: 'success', data: {hours: d}};
          console.log(retVal)
        } else {
          res.status(404);
          retVal = {status: 'fail', data: {title: `hours not found`}};
        }
        console.log(res.json(retVal));

      });
    })
  })

  req.on('error', error => {
    console.error(error);
  })

  req.end();
  return await data;
}

console.log("Returned Data = " + JSON.stringify(await getHours()));
console.log("Finished getHours()");
