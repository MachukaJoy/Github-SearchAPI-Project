import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  githubUsername!: string;
  githubsearchForm!: FormGroup;
  username:any; 
  user: any;
  userRepositories: any;
  getUser() {
    this.githubUsername = this.githubsearchForm.value.githubUsername

    this.dataservice.updateusername(this.username)

    this.userdetailsroute.navigate([`user/${this.githubUsername}`])
  }

  constructor(private userdetailsroute:Router, private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.githubsearchForm = new FormGroup({
      githubUsername: new FormControl(
        null,
        [Validators.required]
      )
    })
    this.dataservice.getGithubUserData().subscribe(
      data => {
        this.user = data
      // console.log( this.user)
  }
    )

    // My repositories
    this.dataservice.getGithubUserRepoData().subscribe(
      data => {
        this.userRepositories = data
      console.log( this.userRepositories)
  }
    )
  }

}
