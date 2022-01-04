SELECT customers.name, invoices.invoice_number, expenses.description, expenses.number_of_units, expenses.rate FROM customers
INNER JOIN invoices ON (customers.id = invoices.customer_id)
INNER JOIN expenses ON (invoices.id = expenses.invoice_id)
ORDER BY customers.name;
