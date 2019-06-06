import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class AppResumeComponent implements OnInit {
  constructor( private _markdownService: MarkdownService ) { }

  public ngOnInit() {
    this._markdownService.renderer.heading = (text: string, level: number) => {
      return `<h${level} class="heading xl${Math.max(3 - level, 0)}">${text}</h${level}>`;
    };

    this._markdownService.renderer.image = (href: string, title: string, text: string) => {
      switch (title) {
        case 'fas-icon':
        case 'fa-icon':
        case 'fa':
        case 'fas':
          return `<i class="fas ${href} xl"></i>`;
        case 'fab-icon':
        case 'fab':
          return `<i class="fab ${href} xl"></i>`;
        default:
          return `<img src="${href}" alt="${title}" title="${text}">`;
      }
    };
  }
}
