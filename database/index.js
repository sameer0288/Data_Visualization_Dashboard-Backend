import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Visualization-Dashboard")
    .then(() => {
      console.log("MongoDb database is connected!");
    })
    .catch((error) => {
      console.log(error);
    });
};
