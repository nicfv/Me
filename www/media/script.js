// Configure MathJax to allow inline $math$
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
    },
};

// Highlight code blocks
window.hljs.highlightAll();

function slugify(str = '') {
    return str
        .normalize()
        .toLowerCase()
        .trim()
        .replaceAll(/[^a-z0-9\s-]/g, '')
        .replaceAll(/\s+/g, '-')
        .replaceAll(/-+/g, '-');
}

// Add slugs to all header elements
document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => element.setAttribute('id', slugify(element.textContent)));
