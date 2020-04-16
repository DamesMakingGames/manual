const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");
const { pathPrefix } = require("./gridsome.config");
const luxon = require("luxon");

var DateTime = luxon.DateTime;
let d = DateTime.local();
let today = d.toISODate();
module.exports = function(api, options) {
  api.createPages(({ createPage }) => {
    createPage({
      path: "/projects",
      component: "./src/templates/Projects.vue",
      context: {
        today: today,
      },
    });
  });
  api.loadSource((store) => {
    const cleanedPathPrefix = `${
      pathPrefix
        ? ["", ...pathPrefix.split("/").filter((dir) => dir.length)].join("/")
        : ""
    }`;

    store.addMetadata("pathPrefix", cleanedPathPrefix);
  });

  api.beforeBuild(({ config, store }) => {
    const { collection } = store.getCollection("Post");

    const posts = collection.data.map((post) => {
      return pick(post, ["title", "path", "summary", "content"]);
    });

    const output = {
      dir: "./static",
      name: "search.json",
      ...options.output,
    };

    const outputPath = path.resolve(process.cwd(), output.dir);
    const outputPathExists = fs.existsSync(outputPath);
    const fileName = output.name.endsWith(".json")
      ? output.name
      : `${output.name}.json`;

    if (outputPathExists) {
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    } else {
      fs.mkdirSync(outputPath);
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    }
  });
};
