const EleventyPreactPlugin = require("./11ty/PreactPlugin.cjs");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const EleventySveltePlugin = require("./11ty/SveltePlugin.cjs");
const EleventyVuePlugin = require("./11ty/VuePlugin.cjs");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.addWatchTarget("./lib/svelte");
  eleventyConfig.addWatchTarget("./lib/preact");

  eleventyConfig.addPlugin(EleventySveltePlugin);
  eleventyConfig.addPlugin(EleventyPreactPlugin);
  eleventyConfig.addPlugin(EleventyVuePlugin);

  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("image", (image) => {
    return image.replace("src/images", image);
  });

  eleventyConfig.addFilter("image", (image) => {
    return image.replace("src/uploads", image);
  });

  eleventyConfig.addShortcode("image", async function (src, alt, sizes) {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ["webp", "jpeg"],
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/images");

  // Correctly configured copy for uploads to root
  eleventyConfig.addPassthroughCopy({ "./src/uploads": "./uploads" });

  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("tailwind_theme/tailwind.css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy("../css/styles.css");

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes", // Adjust the includes path accordingly
      data: "../_data", // Point to your custom pages directory
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
