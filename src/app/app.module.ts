import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import TweenLite from 'gsap/TweenLite';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import 'gsap/CSSPlugin';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    // TweenLite
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
