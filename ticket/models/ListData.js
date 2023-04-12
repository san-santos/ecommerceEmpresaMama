const mongoose = require("mongoose");

const { Schema } = mongoose;

const ListDataSchema = new Schema(
  {
    template: String,
    idNegociation: Number,
    payerName: String,
    addressBillingBeneficiary: String,
    districtPayer: String,
    payerTown: String,
    cepPayer: String,
    cpfPayer: String,
    uuid: String,
    ufPayer: String,
    houseNumber: String,
    dueDate: String,
    dateDocument: String,
    documentNumber: String,
    dateProcessing: String,
    ourNumber: String,
    instructions: String,
    invoiceValue: Number,
    bank: String,
    wallet: String,
    agency: String,
    beneficiaryCode: String,
    coinType: String,
    accepted: String,
    invoiceMonth: String,
  },
  { timestamps: true }
);

const ListData = mongoose.model("ListData", ListDataSchema);

module.exports = ListData;
