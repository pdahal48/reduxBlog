/** Server for microblog. */

const app = require("./app");

app.listen(process.env.PORT || 5550, function () {
  console.log("Server is listening on port 5550");
});
