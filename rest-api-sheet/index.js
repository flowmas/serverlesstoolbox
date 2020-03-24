// const express = require('express');
// const app = express();

// app.listen(8080);

// app.get('/', async (req, res) => {
//   const hours = await getHours();
//   let retVal;
//   if (hours) {
//     retVal = {status: 'success', data: {hours: hours}};
//     console.log(retVal)
//   } else {
//     res.status(404);
//     retVal = {status: 'fail', data: {title: `hours not found`}};
//   }
//   res.json(retVal);
// });

// async function getHours() {
//   const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1qObCPH0-8zxjvG5KcbmT2iMk40KffE1LPhj0UhBFDh8/values/Sheet1?key=AIzaSyBZ95WJEcD7pL8QD83EyAsWSWTxoqQo2Cc');
//   const myJson = await response.json();
//   for (let store of myJson.values) {
//       return {
//         id: store[0],
//         name: store[1],
//         warehouseLocation: store[2],
//         ZIP: store[3],
//         date: store[4],
//       }
//    }
// }


const express = require('express');
const app = express();

app.listen(8080);

app.get('/', async (req, res) => {
  const hours = getHours();
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

function getHours() {
  return {
    id: '1',
    name: 'Snohomish Store',
    warehouseLocation: 'Snohomish, WA',
    ZIP: '98290',
    date: '3/24/2020'
  };
}

