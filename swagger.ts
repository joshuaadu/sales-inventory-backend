const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Sales Inventory API",
    description: "Description",
  },
  // host: `localhost:3000`,
  host: "sales-inventory.onrender.com",
  schemes: ["https"],
  // schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
     'endpointsFiles' only the root file where the route starts,
     such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
