import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


class App{
    constructor(){
        this.server = express();

        const user = process.env.REACT_APP_MONGODB_USER;
        const password = process.env.REACT_APP_MONGODB_PASSWORD;

        mongoose
            .connect(`mongodb+srv://${user}:${password}@cluster-free.i2jlk90.mongodb.net/cluster-free?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;