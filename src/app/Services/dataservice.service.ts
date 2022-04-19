import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../Classes/user'
import { Repo } from '../Classes/repo';
import { HttpClient } from '@angular/common/http';
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  user="any";
  username= "MachukaJoy";
  MYKEY: string = environment.apiKey;
  USERAPIURL = `https://api.github.com/users/${this.username}`

  constructor(private http:HttpClient) { 
    console.log('Fetching data')
  }


  getGithubUserData():Observable<any> {
    return this.http.get<any>(this.USERAPIURL)


  }
  getGithubUserRepoData():Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${this.username}/repos`)

  }
  getUserData(username:string){
    return this.http.get<User>(`https://api.github.com/users/'${this.username}'?acess_token=${this.MYKEY}`);
  }

  getUserRepos(githubUsername:string){
    return this.http.get<Repo>(`https://api.github.com/users/${this.username}/repos?order=created&sort=asc?access_token=${this.MYKEY}`)

}
updateusername(username:string){
  this.username = username;

}
}
