import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersModule} from "./users/users.module";
import { AppComponent } from './app.component';
import { UserFileComponent } from './user-file/user-file.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFileComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
