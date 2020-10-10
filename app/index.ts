import * as restify from 'restify'
import OperationManager from "@app/model/expression/OperationManager";
import DefaultDefinitions from "@app/model/expression/definitions/default/definitions";

let om = new OperationManager();
DefaultDefinitions(om);
let t = om.constructTree({
    sum: [
        1,2,3
    ]
});

console.log(t.invoke(null));

function respond(req: any, res: any, next: any) {
    res.send('hello ' + req.params.name);
    next();
}

const server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
