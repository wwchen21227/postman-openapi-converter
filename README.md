# Postman collection to Open API converter

This is a simple experiment project that help converting Postman Collection v2.1/v2.0 to OpenAPI v3.0. Additionally, you can quickly check the output by accessing swagger UI at http://localhost:8001.

## Prerequisites
- Docker

## Getting Started
```bash
docker-compose up
```

## Environment Variables
You can configure some of the env variables in docker compose file for your need.

### postman-openapi-converter
1) POSTMANE_COLLECTION_FILE => Your postman collection file name.
2) OPENAPI_OUTPUT_FILE => Your open api output file name.

### swagger-ui
3) API_URL => Change according to your open api file name.

## Built With
- Docker
- Nodejs
- postman-to-openapi
- swagger-ui

# Improvements
- [ ] Support multiple files conversion.
- [ ] Simplify repeatable run for additional conversion.