const login = require("./data/login.json");
const list = require("./data/list.json");
module.exports = {
  devServer: {
    before(app) {
      app.get("/api/login", (req, res) => {
        res.json(login);
      });
      app.get("/api/getList", (req, res) => {
        res.json(list);
      });
    }
  }
};

// devServer: {
//     "/api": {
//       target: "http://localhost:8080/api/",
//       ws: true,
//       changOrigin: true,
//       pathRewrite: {
//         "^/api": ""
//       }
//     },
//     before(app) {
//       app.get("/api/login", (req, res) => {
//         res.json(login);
//       });
//     }
//   }
