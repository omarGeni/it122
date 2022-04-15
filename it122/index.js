// npm 
import http from 'http';
import {getAll, getItem} from './data.js';
import { parse } from "querystring";

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getAll));
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let url = req.url.split("?"); // separate route from query string
            let query = parse(url[1]); // convert query string to a JS object
            res.end(JSON.stringify(getItem(query)));
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);
