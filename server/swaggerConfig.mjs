import swaggerAutogen from "swagger-autogen";

env.config();

const doc = {
  info: {
    title: "Neatly Hotel API",
    description: "API documentation",
  },
  host: process.env.BACKEND_URL,
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.mjs"];

swaggerAutogen()(outputFile, endpointsFiles);
