// begin adding cvstojson implementation
const path = require('path')
const csv = require('csvtojson');

const csvFilePath = path.resolve(__dirname + '/../uploads/Bestellingen.csv')


module.exports = {
  index: (req, res) => {
    const _res = res;
    let x = []

    csv({delimiter: "auto"})
      .fromFile(csvFilePath)
      .on('json',(jsonObj) => {
         // combine csv header row and csv line to a json object
         console.log(jsonObj)
         x.push(jsonObj)
      })
      .on('done',(error) => {
         console.log('end')
         res.send({items: x})
      })
    // res.send({message: 'hello'})
  },

  create: (req, res) => {
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..
    console.log(file);
  }
  // send the data to our REST API
}
