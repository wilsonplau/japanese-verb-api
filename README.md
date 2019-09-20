## About this Project

This is an GraphQL API that handles all Japanese verb conjugations. The base data provided in this project provides for approximately 300 verbs as a starting point, but the database can also be populated via the API provided. In addition, the API handles conjugations for all verbs when the type of the verb (ru-verb, u-verb, irregular) is specified. 

## Usage

To configure the server, modify `knexfile.js` with your database configurations. This API uses a postgresql server by default. 

```bash
module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_username',
    password : 'your_database_password',
    database : 'your_database_name'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
```

To install all required dependencies:

```bash
    yarn
```

To migrate and populate the server:

```bash
    yarn migrate
    yarn seed
```

To start the server at localhost:4000:

```bash
    yarn start
``` 

## API

### 1. Conjugate
To use the conjugation API, specify any verb and the forms you are looking for the verb to be conjugated into. 
If the verb does not exist in the database, please specify the type of the verb. 

```bash
    query {
      conjugate (verb: "食べる") {
        passive_polite_present_form
      }
    }
```

### 2. Search
To use the search API, specify a conjugated form of a verb and it will search the database to find a match and return the dictionary form and type of the verb, as well as what conjugated form it is in. 

```bash
    query {
      search (query: "食べられる") {
        dictionary_form
        queried_form
        type
      }
    }
```
