# NoSQL MongoDB Project : Teal

Repository for study project at Ynov Lyon's school with Titouan, Emeric, Alexandra and Louis.

## Requirements

- npm


## Installation

```
npm install
```

```
npm run prod
```

## Setup database

 - Install mongodb server on linux server.
 - Edit the file scripts/updateCollection.sh and replace `ProjetNoSql` by your database's name
 - Edit the file server/database/database.ts with your connexion's string like `mongodb://<user>:<password>@<server_adress>/<database_name>?retryWrites=true`


## Technical choices

We used **NextJS** for the front-end and **NodeJS/Express** for the back-end.
We choose these technologies because we had some knowledge with *React*, **Express** and **NodeJS** are perfect for backend.
We also used some **TypeScript** to typed JS.
And, as you already know, we had a **MongoDB** server running.

## Difficulties

We had some issues and some struggles on how to display data from the MongoDB server.
So it slowed us a bit in the development, but we managed to figured it out and continue the project without big issues.

### :sparkles: [Demo](http://louis-charavner.fr:4098/) :sparkles:
