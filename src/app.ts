// app.ts
import express, { Application } from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes';
import {api} from './controllers/api.controller';
import path from 'path';
import { entrar, login } from './controllers/index.controller';

const app: Application = express();

app.set('view cache', false);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set("server", '3000' || "3020");
// Middleware
app.use(morgan('dev'));
app.use(express.json());
// app.use(express)
// Routes
app.use('/', indexRoutes);
app.use('/api', api);
app.use('/login', login);
app.use('/entrar', entrar);
// Start the server
app.listen(app.get("server"), () => {
    console.log(`server on port  ${app.get("server")}`);
});
