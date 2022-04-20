import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchComponent } from './Components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UseraccountComponent } from './Components/useraccount/useraccount.component';
import { HighlightDirective } from './highlight.directive';
import {FormsModule} from '@angular/forms';
import { DatePipe } from './date.pipe'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    UseraccountComponent,
    HighlightDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
