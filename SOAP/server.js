const soap = require('soap');
const fs = require('fs');
const http = require('http');

const wsdlPath = 'calculatorService.wsdl';

// Define the service implementation
const service = {
    CalculatorService: {
        CalculatorPort: {
            calculate: function (args) {
                const a = args.a;
                const b = args.b;

                return {
                    sum: a + b,
                    difference: a - b
                };
            }
        }
    }
};

// Load WSDL file
const xml = fs.readFileSync(wsdlPath, 'utf8');

// Create an HTTP server
const server = http.createServer(function (req, res) {
    res.end("SOAP Server Running");
});

// Start listening
server.listen(8000, () => {
    console.log('Server listening on port 8000');
});

// Attach SOAP service
soap.listen(server, '/calculate', service, xml);
console.log('SOAP service available at http://localhost:8000/calculate?wsdl');
