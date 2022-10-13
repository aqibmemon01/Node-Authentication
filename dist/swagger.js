"use strict";
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['./features/auth/routes/index.js'];
// const endpointsFiles = ['./routes.js']
const doc = {
    info: {
        version: '1.0.0',
        title: 'Accountsyup Auth',
        description: 'Accountsyup Server', // by default: ''
    },
    host: 'localhost:4040',
    basePath: '/auth/api',
    schemes: [],
    consumes: [],
    produces: [],
    tags: [
        {
            name: '',
            description: '', // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},
    definitions: {},
    components: {} // by default: empty object (OpenAPI 3.x)
};
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js');
});
