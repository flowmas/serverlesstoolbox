const express = require('express');
const https = require('https')
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Costco Hours listening on port', port);
});

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let retVal;
  var hours = { 'id': '1','name': 'Snohomish Store', 'warehouseLocation': 'Snohomish, WA', 'ZIP': '98290', 'date': '3/24/2020'};
  if (hours) {
    retVal = {status: 'success', data: {hours: d}};
    console.log(retVal);
  } else {
    res.status(404);
    retVal = {status: 'fail', data: {title: `hours not found`}};
  }
  res.json(retVal);
}
        
// async function getHours() {
//   var data
//   const options = {
//     hostname: 'sheets.googleapis.com',
//     port: 443,
//     path: '/v4/spreadsheets/1qObCPH0-8zxjvG5KcbmT2iMk40KffE1LPhj0UhBFDh8/values/Sheet1?key=AIzaSyBZ95WJEcD7pL8QD83EyAsWSWTxoqQo2Cc',
//     method: 'GET'
//   };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//       process.stdout.write(d);
//       return d;
//      });
//    })

//   req.on('error', error => {
//     console.error(error);
//   })

//   req.end();
  
// }
