import http from "https";
import fs from "fs"
import path from "path"
import stream from "stream"

const URL: string = "https://fakestoreapi.com/products";

http.get(URL, (resp) => {
  let body = "";

  resp.on("data", (chunk) => {
    console.log(chunk);
    body += chunk;
  });

  resp.on("end", () => {
    let result = JSON.parse(body);
    
  });
});
