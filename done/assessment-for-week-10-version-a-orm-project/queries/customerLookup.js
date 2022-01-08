const { Customer, Invoice  } = require('../models');

async function lookupCustomerAndInvoicesById(id) {
  return await Customer.findByPk(id, {
    include: {model: Invoice}
  })
};

async function lookupCustomersByName(name) {
  return await Customer.findAll({
    where: {name}
  })
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  return await Customer.findOne({
    include: {
      model: Invoice,
      where: {invoiceNumber}
    }
  })
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
