import http, { IncomingMessage, ServerResponse } from "http";

const port = 4355;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.statusCode = 200;
  }
);

server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
