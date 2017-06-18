import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassDataComponent } from './pass-data/pass-data.component';
import { StyleChangeDirective } from './style-change.directive';
import { StructuralDirDirective } from './structural-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassDataComponent,
    StyleChangeDirective,
    StructuralDirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
