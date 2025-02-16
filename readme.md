# REST & SOAP Examples

This project demonstrates the implementation of a simple calculator service using both REST and SOAP web service architectures. The service provides basic arithmetic operations (addition and subtraction) through two different implementations.

## Setup and Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### REST Service Setup
1. Navigate to the REST directory:
```bash
cd REST
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The REST server will start running on `http://localhost:8000`

### SOAP Service Setup
1. Navigate to the SOAP directory:
```bash
cd SOAP
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The SOAP server will start running on `http://localhost:8000`

## API Documentation

### REST Endpoint

#### Calculate
- **URL**: `/calculate`
- **Method**: `POST`
- **Content-Type**: `application/json`

##### Request Body
```json
{
    "a": number,
    "b": number
}
```

##### Example Request
```bash
curl --location --request POST 'http://localhost:8000/calculate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "a":100,
    "b":87
}'
```

##### Example Response
```json
{
    "sum": 187,
    "difference": 13
}
```

##### Error Response (400 Bad Request)
```json
{
    "message": "Invalid Data"
}
```

### SOAP Endpoint

#### Calculate
- **URL**: `http://localhost:8000/calculate`
- **WSDL**: `http://localhost:8000/calculate?wsdl`

##### Example SOAP Request
```bash
curl --location --request POST 'http://localhost:8000/calculate' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://example.com/calculator">
  <soap:Body>
    <tns:CalculateRequest>
      <a>40</a>
      <b>30</b>
    </tns:CalculateRequest>
  </soap:Body>
</soap:Envelope>'
```


##### Example SOAP Response
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://example.com/calculator">
<soap:Body>
<tns:CalculateResponse>
<sum>70</sum>
<difference>10</difference>
</tns:CalculateResponse>
</soap:Body>
</soap:Envelope>
```

