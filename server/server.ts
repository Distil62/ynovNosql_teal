import express = require('express');
import next = require('next');
import bodyparser = require('body-parser');

import database from './database/database';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

database();

app
    .prepare()
    .then(() => {
        const server = express();

        server.use(express.json());
        server.use(bodyparser.urlencoded({extended: false}));
        server.use(bodyparser.json());
        server.use(routes);

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    });
