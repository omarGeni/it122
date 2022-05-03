import mongoose from 'mongoose';
const { Schema } = mongoose;
// import * as connectionString from './credentials.js';

// For security, connectionString should be in a separate file and excluded from git
export const connectionString = "mongodb+srv://DBUser:8PGJMFNwXbiMesAO@cluster0.kqelq.mongodb.net/projects?retryWrites=true&w=majority";


mongoose.connect(connectionString, {
    dbName: 'projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const countriesSchema = new Schema({
countryName: String,
capital: String,
populationInMil: Number,
language: String
});

export const Countries = mongoose.model('Countries', countriesSchema, 'countries');
// import mongoose from 'mongoose';
// const { Schema } = mongoose;
// // import * as connectionString from './credentials.js';

// // For security, connectionString should be in a separate file and excluded from git
// export const connectionString = "mongodb+srv://dbuser:37zVepo5xTYt9okV@cluster0.x9mic.mongodb.net/project?retryWrites=true&w=majority";


// mongoose.connect(connectionString, {
//     dbName: 'project',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('open', () => {
//   console.log('Mongoose connected.');
// });

// // define data model as JSON key/value pairs
// // values indicate the data type of each key
// const countriesSchema = new Schema({
//  countryName: { type: String, required: true },
// //  count: Number,
// //  pubdate: Date,
// //  inStore: Boolean
// capital: String,
// language: String
// });

// export const Countries = mongoose.model('Countries', countriesSchema);