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
  // githubUsername!: string;
  // githubsearchForm!: FormGroup;
  // username:any; 
  // user: any;
  GithubUserData!: User;
  userRepositories: any;
  searchingName: string = "";
  personalData: any;
  searchingname: any;
  user: any;
  // getUser() {
  //   this.githubUsername = this.githubsearchForm.value.githubUsername

  //   this.dataservice.updateusername(this.username)

  //   this.userdetailsroute.navigate([`user/${this.githubUsername}`])
  // }

  constructor(private userdetailsroute:Router, private dataservice:DataserviceService) { }

  ngOnInit(): void {}
    getGithubUserData(){
      this.dataservice.getGithubUserData().subscribe(
        data => {
          this.user = data
          this.userdetailsroute.navigate(['/detailsComponent']);
          console.log( this.user)
        }
      )

  
  }

}
