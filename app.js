var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const initialize = require("express-openapi").initialize;
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// OpenAPI routes
initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

// OpenAPI UI
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "http://localhost:3000/api-docs",
    },
  })
);

module.exports = app;
