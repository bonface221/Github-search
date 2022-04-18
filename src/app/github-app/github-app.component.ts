import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-request.service';
import { GithubService } from '../github.service';



@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css'],
})
export class GithubAppComponent implements OnInit {
  
  userName="bonface221";
  repos: any;
  users: any;

  loading = false;

  erroMessage: any;

  constructor(
    private githubService: GithubService,
    private profileRequest: ProfileRequestService
  ) {}

  public getUsers() {
    this.profileRequest.getUsers(this.userName).subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
    
  };
  public getRepos() {
    this.githubService.getRepos(this.userName).subscribe(data => {
      this.repos = data;
    })
    };
    
  
  ngOnInit():void {
    // this.githubService.getRepos(this.userName).subscribe(data =>
    //   console.log(data))
  }
}

