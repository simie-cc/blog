import { MarkedService } from './marked.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = '';

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit() {
        this.http.get('/blog/2018_01_09_ssl_note.md', { responseType: 'text' })
            .subscribe(data => {
                this.title = data;
            });
    }
}
