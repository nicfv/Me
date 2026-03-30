interface Window {
    MathJax: any;
    hljs: any;
}

// Configure MathJax to allow inline $math$
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
    },
};

// Highlight code blocks
window.hljs.highlightAll();

function slugify(str: string): string {
    return str
        .normalize()
        .toLowerCase()
        .trim()
        .replaceAll(/[^a-z0-9\s-]/g, '')
        .replaceAll(/\s+/g, '-')
        .replaceAll(/-+/g, '-');
}

// Add slugs to all header elements and generate the table of contents
const toc: HTMLElement = document.getElementById('toc') as HTMLElement;
document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => {
    const slug: string = slugify(element.textContent);
    const depth: number = +(element.tagName.match(/\d/)![0]);
    element.setAttribute('id', slug);
    const tocLink: HTMLAnchorElement = document.createElement('a');
    toc.appendChild(tocLink);
    tocLink.textContent = element.textContent;
    tocLink.style.marginLeft = `${depth}rem`;
    tocLink.setAttribute('href', `#${slug}`);
});

// Post-process all hyperlinks to other markdown files
document.querySelectorAll('a[href]').forEach(a => {
    const currentHref: string = a.getAttribute('href') ?? '';
    const regex: RegExp = /^\.\/(.+)\.md(#[a-z0-9-]+)?$/;
    const match: RegExpMatchArray | null = currentHref.match(regex);
    if (match) {
        a.setAttribute('href', `/${slugify(match[1])}/${match[2] ?? ''}`);
    }
});
