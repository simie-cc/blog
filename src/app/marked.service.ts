import { Injectable } from '@angular/core';
import * as marked from 'marked/marked.min';

@Injectable()
export class MarkedService {

    renderer: any = null;

    constructor() {
        this.renderer = new marked.Renderer();
        this.renderer.heading = marked_heading;
    }

    mark(markdownContent: string): string {
        //M.marked
        // if (typeof marked !== 'function' || this.renderer === null) {
        //     return '';
        // }
        let renderer = this.renderer;
        return marked(markdownContent, { renderer: renderer });
    }

}

function marked_heading(text, level, raw) {
    let anchor = raw.toLowerCase().replace(/[^\w]+/g, '-');
    return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + anchor
        + '">'
        + '<a class="anchor" href="#'
        + anchor
        + '"><span class="header-link">#</span>'
        + '</a>'
        + text
        + '</h'
        + level
        + '>'
        + '\n';
}
