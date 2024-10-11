module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  // The below line helps me change the format of the dates
  // To use the filter, go to the template and do this {{ post.data.date | postDate }}
  eleventyConfig.addFilter("postDate", (dateObj) => {});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
