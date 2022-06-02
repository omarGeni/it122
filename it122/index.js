
import express from 'express';
import { Countries } from './Countries.js';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json())
app.set('view engine', 'ejs');

app.use('/api', cors());
app.get('/', (req, res, next) => {
    Countries.find({}).lean()
        .then((Countries) => {
            res.render('react-home', { Countries: JSON.stringify(Countries)});
        })
        .catch(err => next(err));
});

app.get('/detail', (req,res,next) => {
        Countries.findOne({ countryName:req.query.countryName }).lean()
            .then((result) => {
                res.render('detail',  {Countries: JSON.stringify(Countries), result: result});
                // res.render('detail',  {countryName: req.query.countryName, result: result});
            })
            .catch(err => next(err));
});

app.get('/api/detail', (req, res, next) => {
    Countries.findOne({ countryName: req.query.countryName }).lean()
        .then((result) => {
             res.render('detail', { countryName: req.query.countryName, result: result });
        })
        .catch(err => next(err));
});

app.get('/api/countries', (req, res) => {
    Countries.find({}).lean()
        .then((Countries) => {
            res.json(
                { Countries }
            );
        })

});


app.get('/api/delete/:countryName', (req, res) => {
    let countryName = req.params.countryName;
    Countries.deleteOne({countryName: countryName}, (err, result) => {
        if(result.deleteCount = 0) {
            res.status(500).json({"message": "not deleted"});
        }else{
            res.status(200).json({"message": `${countryName} was deleted`})
        }
    })
});

app.post('/api/add', (req, res, next) => {
    const newCountry = { 'countryName': req.body.countryName, 'capital': req.body.capital, 'population': req.body.populationInMil, 'language': req.body.language }

    Countries.updateOne({ 'countryName': req.body.countryName }, newCountry, { upsert: true }, (err, result) => {
        if(result) {
            res.json({result:result})
        }else{
            res.status(500).json({"error message": "country not added"});
        }
     
    })
})


app.listen(app.get('port'), () => {
    console.log('Express started');
});

   //notes for react
//    I was able to get the links to work by sending an object with strings + obj.name to href. Ex)  href={string + obj.name}
