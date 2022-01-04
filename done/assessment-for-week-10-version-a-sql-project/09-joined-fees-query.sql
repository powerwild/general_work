SELECT customers.name, invoices.invoice_number, fees.description, fees.amount FROM customers
INNER JOIN invoices ON (customers.id = invoices.customer_id)
INNER JOIN fees ON (invoices.id = fees.invoice_id)
ORDER BY customers.name;
