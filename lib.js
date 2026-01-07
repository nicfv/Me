export function safeString(str = '') {
    return str
        .normalize().trim() // Clean up the string
        .replaceAll(/<[^>]+>/g, '') // Strip HTML tags
        .replaceAll(/(\r?\n)+/g, ' '); // Strip newlines
}