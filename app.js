// const fs = require("fs");
// const express = require("express");

// const app = express();
// app.use(express.json());

// const port = 8080;

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ messageL: "Hello From the server", password: "123456" });
// });

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/tours-data.json`)
// );

// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "successful",
//     result: tours.length,
//     data: {
//       tours,
//     },
//   });
// };

// const createTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/tours-data.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: "Success",
//         data: {
//           tours: newTour,
//         },
//       });
//     }
//   );
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail to get tour",
//       message: "Invalid tour",
//     });
//   }

//   res.status(204).json({
//     status: "succes",
//     data: null,
//   });
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail to get tour",
//       message: "Invalid tour",
//     });
//   }

//   res.status(200).json({
//     status: "succes",
//     data: {
//       tour: "<Your tour is updated....>",
//     },
//   });
// };

// const getTour = (req, res) => {
//   const tourId = req.params.id * 1;
//   const tour = tours.find((el) => el.id === tourId);

//   if (!tour) {
//     return res.status(404).json({
//       status: "fail to get tour",
//       message: "Invalid tour",
//     });
//   }

//   res.json({
//     status: "successful",
//     data: {
//       tour,
//     },
//   });
// };

// //get all data from tours
// app.get("/api/v1/tours", getAllTours);

// //get data using passing the parameters
// app.get("/api/v1/tours/:id", getTour);

// //patch data
// app.patch("/api/v1/tours/:id", updateTour);

// //delete tour data
// app.delete("/api/v1/tours/:id", deleteTour);

// //post data in tour
// app.post("/api/v1/tours", createTour);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
