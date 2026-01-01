export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('www');
    // eleventyConfig.addPassthroughCopy('path/to/media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, ""); // Strip HTML tags
        const paragraphs = content.split(/\n/);
        return paragraphs[0].split(" ").slice(0, 30).join(" ") + "..."; // First 30 words
    });
}