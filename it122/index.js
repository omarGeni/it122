// // npm 
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

import http from 'http';
import { getAll, getItem } from './data.js';
import { parse } from "querystring";
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.type('text/html');
    res.render('home', { countries: [] });
    // res.end("Home pagerrere")
    // res.sendFile('home.html');
});

// send plain text response
app.get('/detail', (req, res) => {
    res.type('text/html');
    console.log(req.query);
    res.end("Detail for " + req.query["countryName"])
    // res.send('Home page');
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