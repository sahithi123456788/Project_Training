exports.handler = async (event) => {
    // Lambda function logic goes here
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, World!'),
    };
    return response;
};
