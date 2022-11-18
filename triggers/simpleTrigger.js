{
  "type": "DATABASE",
  "name": "simpleTrigger",
  "function_name": "simpleFunction",
  "config": {
    "service_name": "mongodb-atlas",
    "database": "test",
    "collection": "customers",
    "operation_types": ["INSERT","UPDATE","REPLACE"],
    "unordered": false,
    "full_document": true,
    "match": {}
  },
  "disabled": false
}

