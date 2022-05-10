
// Week 1-3

// import http from 'http';
// import { getAll, getItem } from './data.js';
// import { parse } from "querystring";

// http.createServer((req, res) => {
//     var path = req.url.toLowerCase();
//     let url = req.url.split("?");
//     let query = parse(url[1]);
//     console.log(query)
//     switch (url[0]) {
//         case '/':
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end(JSON.stringify(getAll));
//             break;
//         case '/about':
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('About page');
//             break;
//         case '/detail':
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end(JSON.stringify(getItem(query['countryName'])));
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000);

// Week 4-5

// import http from 'http';
// import { getAll, getItem , countries} from './data.js';
// import { parse } from "querystring";
// import express from 'express';
// import path from 'path';

// const app = express();
// app.set('port', process.env.PORT || 3000);
// app.use(express.static('./public')); // set location for static files
// app.use(express.urlencoded()); //Parse URL-encoded bodies
// app.use(express.json())
// app.set('view engine', 'ejs');



// app.get('/', (req, res) => {
//     res.type('text/html');
//     res.render('home', {countries: getAll() });
//     // res.render('home', {countries: [{countryName: "USA"}] });
//     // res.end("Home pagerrere")
//     // res.sendFile('home.html');
// });

// // send plain text response
// app.get('/detail', (req, res) => {
//     // let url = req.url.split("?");
//     // let query = parse(url[1]);
//     res.type('text/html');
//     let result =  getItem(req.query.countryName);
//     console.log(req.query.countryName)
//   // res.render('detail',  {countryName: JSON.stringify(getItem(req.query.countryName))});
//   res.render('detail',  {countryName: req.query.countryName, result: result});
// });

// // define 404 handler
// app.use((req, res) => {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not found');
// });

// app.listen(app.get('port'), () => {
//     console.log('Express started');
//    });



import express from 'express';
import { Countries } from './Countries.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json())
app.set('view engine', 'ejs');



app.get('/', (req, res, next) => {
    Countries.find({}).lean()
      .then((countries) => {
        // respond to browser only after db query completes
        res.render('home', { countries });
        console.log(req.query.countryName)
      })
      .catch(err => next(err))
});

// send plain text response
app.get('/detail', (req,res,next) => {
    // db query can use request parameters
    Countries.findOne({ countryName:req.query.countryName }).lean()
        .then((result) => {
            res.render('detail',  {countryName: req.query.countryName, result: result});
        })
        .catch(err => next(err));
});

// define 404 handler
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
   });