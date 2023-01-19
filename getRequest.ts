import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const PORT = 4563;

const Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.statusCode = 200;

    let viewpage: string = "pages/";
    switch (req.url) {
      case "/Homepage":
        // console.log("This page")
        viewpage += "Homepage.html";
        res.statusCode = 200;
        break;

      case "/About":
        // console.log("This page")
        viewpage += "About.html";
        res.statusCode = 200;
        break;

      case "/Contact":
        // console.log("This page")
        viewpage += "Contact.html";
        res.statusCode = 200;
        break;

      case "/Services":
        // console.log("This page")
        viewpage += "Services.html";
        res.statusCode = 200;
        break;

      case "/product":
        // console.log("This page")
        // viewpage += "Services.html"
        res.setHeader("Location", "/Contact");
        res.statusCode = 301;
        break;

      default:
        viewpage += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path.join(__dirname, viewpage), (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
        // res.end(data);
      }
    });
  }
);

Server.listen(PORT, () => {
  console.log(`Server is listenning to port ${PORT}`);
});
