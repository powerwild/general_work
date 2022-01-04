CREATE TABLE expenses(
    id SERIAL PRIMARY KEY NOT NULL
 ,  description VARCHAR(100) NOT NULL
 ,  number_of_units NUMERIC(10,3) NOT NULL
 ,  rate NUMERIC(10,3) NOT NULL
 ,  invoice_id INTEGER NOT NULL REFERENCES invoices(id)
);
ALTER TABLE expenses
OWNER TO app_academy;
