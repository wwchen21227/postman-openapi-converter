const postmanToOpenApi = require('postman-to-openapi');
const path = require('path');

const postmanCollection = path.join(__dirname, process.env.POSTMANE_COLLECTION_FILE);
const outputFile = path.join(__dirname, process.env.OPENAPI_OUTPUT_FILE);

(async function() {
    // Async/await
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
        // Without save the result in a file
        ///const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
        console.log(`OpenAPI specs: ${result}`)
    } catch (err) {
        console.log(err)
    }
})();