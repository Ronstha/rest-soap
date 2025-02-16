const soap = require('soap');

// Create the SOAP client
const url = 'http://localhost:8000/calculate?wsdl';
soap.createClient(url, function(err, client) {
  if (err) {
    console.error('Error creating SOAP client:', err);
    return;
  }

  // Make a SOAP request
  const args = { a:20,b: 19};
  client.calculate(args, function(err, result) {
    if (err) {
      console.error('Error making SOAP request:', err);
      return;
    }

    // Handle the SOAP response
    console.log('Sum:', result.sum);
    console.log('Difference:', result.difference);
  });
});