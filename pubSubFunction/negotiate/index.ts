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

import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { WebPubSubServiceClient } from "@azure/web-pubsub";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    let serviceClient = new WebPubSubServiceClient(process.env["WebPubSubConnectionString"], "sample_powerappshub");
    let token = await serviceClient.getClientAccessToken({ roles: ["webpubsub.sendToGroup.pa", "webpubsub.joinLeaveGroup.pa"] }); 
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: token.url
    };

};

export default httpTrigger;