const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./features/auth/routes/index.js']
// const endpointsFiles = ['./routes.js']


const doc = {
  info: {
    version: '1.0.0',      // by default: '1.0.0'
    title: 'Accountsyup Auth',        // by default: 'REST API'
    description: 'Accountsyup Server',  // by default: ''
  },
  host: 'localhost:4040',      // by default: 'localhost:3000'
  basePath: '/auth/api',  // by default: '/'
  schemes: [],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {}            // by default: empty object (OpenAPI 3.x)
};


swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./index.js')
})