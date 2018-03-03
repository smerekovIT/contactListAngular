import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JsonTransformStringPipe } from './json-transform-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactsDetailsComponent,
    ContactsComponent,
    JsonTransformStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
