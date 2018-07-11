import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameeComponent } from './namee/namee.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

 
@NgModule({
  declarations: [
    AppComponent,
    NameeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
