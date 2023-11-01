// const dotenv = require("dotenv");
import { config } from "dotenv";
config();

export const express = {
  port: process.env.EXPRESS_PORT || 3000,
  host: process.env.EXPRESS_HOST || "localhost",
  // Add any other Express config options here
};
export const node = {
  env: process.env.NODE_ENV || "development",
  // Add any other Node.js config options here
};
export const mongo = {
  uri: process.env.MONGO_URI || "mongodb://localhost:27017",
  // Add any other MongoDB config options here
};
