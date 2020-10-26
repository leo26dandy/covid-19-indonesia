const port =  process.env.PORT||3000;
// set up express requirement
const express = require('express');
const app = express();
//  set up axios requirement
const axios = require('axios');
const { resolveNaptr } = require('dns');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('assets'));
 
// app.get('/', function (req, res) {
//   res.render('search');
// });

app.get('/', (req, res) => {
    const query = req.query.pencarian;
    console.log(query);
    axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then( (response) => {
            console.log(response.data);
            const apiData = response.data;
            res.render('result', {data: apiData.data})
        })
        .catch( (error) => {
            console.log(error);
        });
});
 
app.listen(port, (req, res) => {
    console.log(`it is running at port: ${port}`);
});