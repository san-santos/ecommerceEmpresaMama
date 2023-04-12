const mongoose = require('mongoose');
require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_HOST);
    console.log("Conectado ao Banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}
//C4P9kLgG0rcSkIHj
module.exports = main;
