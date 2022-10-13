
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';

const app = express();

// app.use(express.json());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')))

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}...`));