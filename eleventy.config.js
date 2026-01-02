export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('www');
    eleventyConfig.addPassthroughCopy('www/media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('excerpt', post => {
        const firstPara = post.match(/<p[^>]*>(.+?)<\/p>/s);
        if (firstPara) {
            return firstPara[1].replaceAll(/<[^>]+>/g, ''); // Strip HTML tags
        } else {
            return '';
        }
    });
}