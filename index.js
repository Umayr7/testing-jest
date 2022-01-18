const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const connectDB = require('./config/database');
const app = express();

const userRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Connect Database
connectDB();

//*Swagger Api Options
const options = {
	definition: { 
		openapi: "3.0.0",
		info: {
			title: "Test Rest Api ",
			version: "1.0.0",
			description: "Test server side documentation",
		},
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          in: "header"
        }
      }
    },
    servers: [
        {
            url: "http://localhost:8000",
    description: "Local Server "
        },
    ],
	},
	apis: [
    "./src/swagger/*.yaml"
  ],
};

const swaggerDocs = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/users', userRoutes);

app.listen(8000);

module.exports = {
    app
}