import showdown from 'showdown';
import {dedent} from '$components/documentor/index.js'
const { Converter } = showdown;
// const showdown = require('showdown');

// console.log("SHOWDOWN", showdown)


export function md(strings) {
    // console.log(strings)
    const converter = new Converter();
    const html = converter.makeHtml(dedent(strings.join('')));
    // console.log("HTML:", html)
    return html
}
