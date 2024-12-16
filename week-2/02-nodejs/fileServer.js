const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filesFolder = "files/";

/**
 * GET /files
 * Returns a list of files present in `./files/` directory
 * Response: 200 OK with an array of file names in JSON format
 * Example: GET http://localhost:3000/files
 */
app.get("/files", (req, res) => {
  try {
    const output = fs.readdirSync(path.join(__dirname, filesFolder));
    return res.status(200).send(output);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "unable to read the folder" });
  }
});

/**
 * GET /file/:filename - Returns content of given file by name
 * Description: Use the filename from the request path parameter to read the file from `./files/` directory
 * Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
 * Example: GET http://localhost:3000/file/example.txt
 */
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  try {
    const fileOutput = fs.readFileSync(path.join(__dirname, filesFolder, filename));
    return res.status(200).send(fileOutput);
  } catch (err) {
    if (err.code === "ENOENT") {
      return res.status(404).send("File not found");
    }
    console.log(err.code);
    return res.status(500).json({ message: "Unable to read the file" });
  }
});

/**
 * For any other route not defined in the server return 404
 */
app.all("**", (req, res) => {
  return res.status(404).send("Route not found");
});

const port = process.env.PORT || 4000;
const appListener = app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});

app.close = function () {
  appListener.close();
}

module.exports = app;

/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
