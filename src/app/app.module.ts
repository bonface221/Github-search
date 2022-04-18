import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRequestService } from './profile-request.service';
import { GithubService } from './github.service';

@NgModule({
  declarations: [AppComponent, GithubAppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProfileRequestService, GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
