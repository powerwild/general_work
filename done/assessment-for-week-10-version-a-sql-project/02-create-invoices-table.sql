CREATE TABLE invoices(
    id SERIAL PRIMARY KEY NOT NULL
 ,  invoice_number VARCHAR(20) UNIQUE NOT NULL
 ,  created_at TIMESTAMP NOT NULL
 ,  paid_on TIMESTAMP
 ,  customer_id INTEGER NOT NULL REFERENCES customers(id)
);
ALTER TABLE invoices
OWNER TO app_academy;
