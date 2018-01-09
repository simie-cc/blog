import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MarkedService } from './../marked.service';

@Component({
    selector: 'app-marked-viewer',
    templateUrl: './marked-viewer.component.html',
})
export class MarkedViewerComponent implements OnInit, OnChanges {

    @Input() markdown: string;
    @ViewChild('markdownBody') markdownBody: ElementRef;

    @HostBinding('class') clazz = 'markdown-body';

    private _internal_markdown: string = '';

    constructor(
        private markedService: MarkedService
    ) { }

    ngOnChanges() {
        if (this._internal_markdown === this.markdown) {
            return;
        }

        if (!this.markdownBody || !this.markdownBody.nativeElement) {
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
        elm.innerHTML = this.markedService.mark(this._internal_markdown);
    }
}
