const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
server.listen(port, () => console.log("listening on port", port));
