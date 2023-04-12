const { ListData: ListDataModel } = require("../models/ListData");

const ListDataController = {
  getAll: async (req, res) => {
    try {
      const getlistData = await ListDataModel.find();
      res.json(getlistData);      
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = ListDataController;
