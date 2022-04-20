import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  GithubUserData!: User;
  userRepositories: any;
  searchingName: string = "";
  personalData: any;
  searchingname: any;
  user:  User = new User("", "", "", "",0,0, 0,"",0, 0);
  
  constructor(private userdetailsroute: Router, private dataservice: DataserviceService) { }

  getUser(githubsearchform:NgForm){
    let searchingName = githubsearchform.value.searchingName;
    let submitted = false;
    this.dataservice.getUserData(searchingName).subscribe(data =>
      {
    this.user.login = data.login;  
    this.user.avatar_url = data.avatar_url;
    this.user.bio  = data.bio;
    this.user.company = data.company;
    this.user.created_at= data.created_at;
    this.user.followers = data.followers
    this.user.following = data.following;
    this.user.html_url = data.html_url;
    this.user.updated_at = data.updated_at;
    this.user.public_repos = data.public_repos;

    console.log(this.user);
      })
    }

  ngOnInit(): void {}

  }
