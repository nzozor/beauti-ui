const fs = require("fs");
const axios = require("axios");

let routes = [];
axios
  .get("https://cms.beautiskinclinic.com/treatments")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
    routes = res;
    routes = routes.data.map((route) => `/treatments/${route.slug}`);
    routes.push("/about-us");
    routes.push("/contact");
    routes.push("/treatments");
    routes.push("/");
    routes = routes.join("\r\n");
    writeToFile(routes);
  })
  .catch((error) => {
    console.error(error);
  });

function writeToFile(routes) {
  fs.writeFile("./dynamic-routes.txt", routes, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(routes);
  });
}
