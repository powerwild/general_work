# Sequelize Assessment

In this assessment, you will create:

* A database user with a password
* A database owned by that user
* Sequelize migrations to create tables
* Sequelize seeders to bulk insert and delete data
* Sequelize models with proper relations

The data model that you will be implementing is for a simple invoice system:

![Data Model][data-model]

### Important Notes on Testing

For today's assessment, you must run the tests with `npm test`. This will set
the proper environment variable for using the test database environment. The
tests will use the "invoice_sequelize_app_test" database that you will create.

There are mocha tests that determine if it can connect to the database with the
specified user name, password, and database name. It checks the tables to make
sure that they have the structure specified.

The tests will check that models are correctly named by making assumptions about
how they're used. Remember:

* Models are capitalized singular nouns
* Tables are capitalized plural nouns

The tests will expect that you have created seeder files to insert the provided
data. Before tests, it will run the equivalence of, in order:

* `db:seed:undo:all`
* `db:migrate:undo:all`
* `db:migrate`
* `db:seed:all`

## Get started

* Clone the assessment from the [starter].
* Run `npm install`
* Run tests with `npm test`

## Step 1

Create a database user named "app_academy" with the password
"password". There is no need to create a file for this. Simply
connect to your local installation of PostgreSQL, and create the user. The tests
assume that it exists.

**Note**: You should _never_ set the password of a database user to something so
easy to guess. This is merely a convenience for this assessment.

## Step 2

Create two databases named "invoice_sequelize_app_development" and
"invoice_sequelize_app_test", both with the owner "app_academy". As in
Step 1, there is no file for this. Just do it for your local installation of
PostgreSQL.

When you are working on this application directly, it should use the
"invoice_sequelize_app_development" database. When you modify migrations or
models, you should run the associated `sequelize-cli` commands to make sure that
tables and data are what you expect them to be.

The tests will use the "invoice_sequelize_app_test" database.

Once you've created these two databases, you can test that the
"invoice_sequelize_app_test" database is set up by running `npm test`. If the
database is set up, you won't see errors stating that 'database
"invoice_sequelize_app_test" does not exist'.

Once your development database has been created, run `npx sequelize-cli
db:migrate` to run all migrations and `npx sequelize-cli db:seed:all` to seed
data. Running the migration and seed commands will load in data for the
`Invoice` and `Customer` models.

Once your development and test databases are set up, you're ready to move on to
Step 3.

## Step 3

Set up the `Customer` and `Invoice` associations. The project skeleton already
has models in place for Customer and Invoice. The data model is below for
reference:

![Data Model][data-model]

Create a one-to-many relationship between a `Customer` and their `Invoices`.

You can confirm that the foreign key for this relationship already exists on the
`Invoices` table through the `customerId` field.

One `Customer` can have many `Invoices` and one `Invoice` can only have one
`Customer`.

* Configure the `Customer` model's associations so that Sequelize creates an
  `Invoices` property that contains a collection of Invoice objects
* Configure `Invoice` model's associations so that it has a `Customer` property
  that will contain the one Customer to which it is associated

Once you've completed this step, you can run `npm test` to ensure the
associations were created appropriately.

Next you'll add `Fee` and `Expense` models, migrations, and seeders in order to
complete your data model build-out.

## Step 4

Generate a model (and migration) for the `Fee` model with the attributes:

| Attribute name | Attribute type |
|----------------|----------------|
| description    | string         |
| amount         | numeric        |
| invoiceId      | integer        |

Configure the migration so that

* the "description" column will hold values up to 100 characters in length and
  not allow `NULL`s
* the "amount" column will not allows `NULL`s and has precision/scale of 10/3
* the "invoiceId" column will not allow `NULL`s and references the "Invoices"
  table

## Step 5

Create a seeder file (using the appropriate `sequelize-cli` command) for Fees:

```js
{ description: 'Service', amount: 96.40, invoiceId: 3, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
{ description: 'Service', amount: 90.40, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
{ description: 'Service', amount: 21.04, invoiceId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
```

For the `down` method, use the following code:

```js
return queryInterface.bulkDelete('Fees', {
  invoiceId: [1, 2, 3, 4]
});
```

## Step 6

Set up the `Invoice` and `Fee` associations.

* **Invoice and Fee** have a one-to-many relationship, that is, one `Invoice`
  can have many `Fees` and one `Fee` can only have one `Invoice`
  * Configure the `Invoice` model's associations so that Sequelize creates a
    `Fees` property that contains a collection of Fee objects
  * Configure the `Fee` model's associations so that it has an `Invoice`
    property that contains the one Invoice to which it is associated


## Step 7

Generate a model (and migration) for the `Expense` model with the attributes

| Attribute name | Attribute type |
|----------------|----------------|
| description    | string         |
| numberOfUnits  | numeric        |
| rate           | numeric        |
| invoiceId      | integer        |

Configure the migration so that

* the "description" column will hold values up to 100 characters in length and
  not allow `NULL`s
* the "numberOfUnits" column will not allows `NULL`s and has precision/scale of
  10/3
* the "rate" column will not allows `NULL`s and has precision/scale of 10/3
* the "invoiceId" column will not allow `NULL`s and references the "Invoices"
  table


## Step 8

Create a seeder file (using the appropriate `sequelize-cli` command) for
Expenses:

```
{ description: 'Normal Usage', numberOfUnits: 70.00, rate: 50.00, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
{ description: 'Over X Usage', numberOfUnits: 15.00, rate: 75.00, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
{ description: 'Normal Usage', numberOfUnits: 81.75, rate: 50.00, invoiceId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
{ description: 'Normal Usage', numberOfUnits: 83.50, rate: 50.00, invoiceId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16' },
{ description: 'Normal Usage', numberOfUnits: 33.00, rate: 50.00, invoiceId: 3, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
{ description: 'Over X Usage', numberOfUnits: 17.25, rate: 75.00, invoiceId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16' },
```

For the `down` method, use the following code:

```js
return queryInterface.bulkDelete('Expenses', {
  invoiceId: [1, 2, 3, 4]
});
```


## Step 9

Run your migration and seed commands. Then, configure the `Invoice` and
`Expense` models so the following associations exist:

* **Invoice and Expense** have a one-to-many relationship, that is, one
  `Invoice` can have many `Expenses` and one `Expense` can only have one
  `Invoice`
  * Configure the `Invoice` model's associations so that Sequelize creates a
    `Expenses` property that contains a collection of Expense objects
  * Configure the `Expense` model's associations so that it has an `Invoice`
    property that containers the one Invoice to which it is associated


## Step 10

Time to write some queries! Inside the "queries" directory, you will find a file
called `customerLookup.js`.

Inside this file are three query functions, that will fetch Customers in a
variety of ways. Complete each query in order to get the final tests to pass.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it

[data-model]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/express/assessments/assets/sequelize-starter-project-orm-data-model.png
[starter]: https://github.com/appacademy/assessment-for-week-10-version-a-orm-project