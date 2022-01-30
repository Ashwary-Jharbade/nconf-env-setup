const nconf = require("nconf");
const path = require("path");
function Config() {
  nconf.argv().env("_");
  const environment = nconf.get("NODE:ENV") || "dev";
  const file = path.join(__dirname, `${environment}.json`);
  nconf.file(environment, file);
  nconf.file("default", "./lib/configuration//default.json");
}

Config.prototype.get = function (key) {
  return nconf.get(key);
};

module.exports = new Config();
