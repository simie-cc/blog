import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = `
# test h1

something **big** test
    `;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.http.get('/blog/1.md', {responseType: 'text'})
            .subscribe(data => {
                this.title = data;
            });
    }
}
