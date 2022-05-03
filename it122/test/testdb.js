import { Countries } from "../Countries.js";

// return all records
Countries.find({}).lean()
  .then((Countries) => {
    console.log(Countries);
  })
  .catch(err => next(err));