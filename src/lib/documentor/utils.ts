import hljs from 'highlight.js'

/**
 * Removes the common indentation from a multi-line string.
 *
 * @param {string} txt - The input string to dedent.
 * @returns {string} - The dedented string.
 */
export function dedent(txt) {
    if (!txt) return ''
    const lines: string[] = Array.isArray(txt) ? txt : txt.split('\n')

    // find the smallest indentation
    const indent = lines
        .filter(line => line.trim() !== '')
        .map((line: string) => line.match(/^\s*/)?.[0])
        .reduce(
            (acc, line) => (line.length < acc.length ? line : acc),
            ' '.repeat(100),
        );

    // replace the indentation
    const dedented = lines.map(line =>
        line.replace(new RegExp(`^${indent}`), ''),
    )
    return dedented.join('\n')
}

export function highlight(lang, txt) {
    return hljs.highlight(dedent(txt.trim()), {language: lang}).value
}

/**
 * Converts HTML code to highlighted HTML using the dedent function.
 *
 * @param {string} txt - The HTML code to convert.
 * @returns {string} - The highlighted HTML code.
 */
export function code2html(txt) {
    return hljs.highlight(dedent(txt), {language: 'html'}).value
}

/**
 * Converts a template literal string to highlighted HTML using the dedent and code2html functions.
 *
 * @param {Array<string>} strings - The template literal strings.
 * @returns {string} - The highlighted HTML code.
 */
export function tohtml(strings) {
    return code2html(dedent(strings.join('')).trim())
}

export function tocss(strings) {
    return hljs.highlight(dedent(strings.join('')).trim(), {language: 'css'})
        .value
}

export function tojs(strings) {
    return hljs.highlight(dedent(strings.join('')).trim(), {
        language: 'javascript',
    }).value
}
