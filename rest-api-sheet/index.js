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
    date: '3/24/2020',
  }
}
