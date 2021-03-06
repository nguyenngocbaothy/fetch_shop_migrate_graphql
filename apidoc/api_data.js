define({ "api": [
  {
    "type": "get",
    "url": "/customer/",
    "title": "Request Get customer information",
    "name": "GetCustomer",
    "group": "Customer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forename",
            "description": "<p>Forename of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "add1",
            "description": "<p>Address1 of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "registered",
            "description": "<p>Customer has registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"forename\": \"John\",\n  \"surname\": \"Doe\",\n  \"add1\": \"123abc\"\n  \"postcode\": \"8888\"\n  \"phone\": \"0123456789\"\n  \"email\": \"john@gmail.com\"\n  \"registered\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Error to get customers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/customer.js",
    "groupTitle": "Customer"
  }
] });
