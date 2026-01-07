export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('www');
    eleventyConfig.addPassthroughCopy('www/media');
    eleventyConfig.addFilter('title', post => {
        const firstHeader = post.match(/<h1[^>]*>(.+?)<\/h1>/s);
        if (firstHeader) {
            return firstHeader[1].replaceAll(/<[^>]+>/g, ''); // Strip HTML tags
        } else {
            return 'Untitled';
        }
    });
    eleventyConfig.addFilter('excerpt', post => {
        const firstPara = post.match(/<h1[^>]*>.+?<\/h1>.*?<p[^>]*>(.+?)<\/p>/s);
        if (firstPara) {
            return firstPara[1].replaceAll(/<[^>]+>/g, ''); // Strip HTML tags
        } else {
            return '';
        }
    });
}