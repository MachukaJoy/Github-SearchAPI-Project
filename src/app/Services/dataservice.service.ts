import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../Classes/user'
import { Repo } from '../Classes/repo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  myKey:string = environment.apiKey;

  apiUrl = "https://api.github.com/users/"

  constructor(private http:HttpClient) { }
  
  getGithubUserData(githubUsername:string) {
    this.http.get(this.apiUrl + githubUsername)
  }

}
