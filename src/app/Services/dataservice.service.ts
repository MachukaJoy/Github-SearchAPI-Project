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
  [x: string]: any;
  user="any";
  username= "MachukaJoy";
  MYKEY: string = environment.apiKey;
  USERAPIURL = `https://api.github.com/users/${this.username}`

  constructor(private http:HttpClient) { 
    console.log('Fetching data')
  }

  getGithubUserData():Observable<any> {
    return this.http.get<User>(this.USERAPIURL)
  }

  getGithubUserRepoData():Observable<any> {
    return this.http.get<Repo>('https://api.github.com/users/'+this.username+'/repos?acess_token='+this.MYKEY);
  }

  getUserData(username:string){
    return this.http.get<any>(
      `https://api.github.com/users/${username}`
    )
  }
}
