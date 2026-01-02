function slugify(str = '') {
    return str
        .normalize()
        .toLowerCase()
        .trim()
        .replaceAll(/[^a-z0-9\s-]/g, '')
        .replaceAll(/\s+/g, '-')
        .replaceAll(/-+/g, '-');
}

document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => element.setAttribute('id', slugify(element.textContent)));
