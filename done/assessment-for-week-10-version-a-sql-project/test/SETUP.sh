psql -U postgres -c "DROP DATABASE IF EXISTS invoice_app_development"
psql -U postgres -c "DROP USER IF EXISTS app_academy"
psql -U postgres -c "CREATE USER app_academy WITH PASSWORD 'password'"
psql -U postgres -c "CREATE DATABASE invoice_app_development WITH OWNER app_academy"
