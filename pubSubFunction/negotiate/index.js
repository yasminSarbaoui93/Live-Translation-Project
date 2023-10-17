//module.exports = async function (context, req, connection) {
    //context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    //const responseMessage = name
    //    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

 //   context.res = {
        // status: 200, /* Defaults to 200 */
   //     body: connection
    //};
    //context.done();
    
//}
const { WebPubSubServiceClient } = require("@azure/web-pubsub");

const httpTrigger = async function (context, req) {
    context.log('HTTP trigger function processed a request.');
    let serviceClient = new WebPubSubServiceClient(process.env["WebPubSubConnectionString"], "sample_powerappshub");
    let token = await serviceClient.getClientAccessToken({ roles: ["webpubsub.sendToGroup.pa", "webpubsub.joinLeaveGroup.pa"] }); 
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: token.url
    };
};

module.exports = httpTrigger;