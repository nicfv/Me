export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('www');
    // eleventyConfig.addPassthroughCopy('path/to/media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('excerpt', post => {
        const firstPara = post.match(/<p[^>]*>(.+)<\/p>/);
        if (firstPara) {
            return firstPara[1].replaceAll(/<[^>]+>/g, ''); // Strip HTML tags
        }
    });
}