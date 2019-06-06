import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';


import { AppResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AppResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
