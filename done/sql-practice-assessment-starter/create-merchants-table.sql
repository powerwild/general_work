CREATE TABLE merchants (
    id SERIAL PRIMARY KEY NOT NULL
 ,  merchant_name VARCHAR(255) NOT NULL
 ,  country_id INTEGER REFERENCES countries(id) NOT NULL
 ,  created_at TIMESTAMP NOT NULL
 ,  admin_id INTEGER REFERENCES users(id) NOT NULL
 ,  merchant_type_id INTEGER REFERENCES merchant_types(id) NOT NULL
);
