const mongoose = require("mongoose");
const app = require("./routes/app");

//dotenv.config({path:'./config.env'});

mongoose
  .connect(
    "mongodb+srv://het:RQfcR4BKTcA77hTu@mycluster1.objgvna.mongodb.net/tour-database",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log(result);
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour name is required"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A price is required"],
  },    
});

const Tour = mongoose.model("Tour", tourSchema);

const tourlist = async () => {
  try {
    const tourdata = new Tour({
      name: "Kasol",
      rating: 4.8,
      price: 486,
    });
    const data = await tourdata.save();
    console.log(data,'got data');
  } catch (error) {
    console.log(error);
  }
};
tourlist();

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// }).then(con => {
//     console.log(con.connections);
//     console.log('DB connection successfully established');
// })

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log('app listening on port');
// })
