export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('www');
    // eleventyConfig.addPassthroughCopy('path/to/media');
    eleventyConfig.addFilter('log', any => console.log(any));
}