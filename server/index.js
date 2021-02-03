const express = require('express');
const path = require('path');
const port = process.env.port || 1111;
const app = express();

const destinationDir = path.join(__dirname, "../dist");

//hosting from dist folder
app.use(express.static(destinationDir)); //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
console.log(`Express hosyt=ting from ${destinationDir}`);

//serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(destinationDir, index.html));
});
console.log("Serving Index.html");

//initialize app
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
