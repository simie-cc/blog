import { Component, OnInit, ElementRef, Input, OnChanges, HostBinding, ViewChild } from '@angular/core';

@Component({
    selector: 'app-marked-viewer',
    templateUrl: './marked-viewer.component.html',
})
export class MarkedViewerComponent implements OnInit, OnChanges {

    @Input() markdown: string;
    @ViewChild('markdownBody') markdownBody: ElementRef;

    @HostBinding('class') clazz = 'markdown-body';

    private _internal_markdown: string = '';

    constructor() { }

    ngOnChanges() {
        if (this._internal_markdown === this.markdown) {
            return;
        }

        if (!this.markdownBody || !this.markdownBody.nativeElement) {
            return;
        }

        if (typeof marked !== 'function') {
            return;
        }

        this._internal_markdown = this.markdown;
        this.refreshMarkdown();
    }

    ngOnInit() {
        this.ngOnChanges();
    }

    private refreshMarkdown() {
        let elm = <HTMLElement>this.markdownBody.nativeElement;
        elm.innerHTML = marked(this._internal_markdown);
    }
}
