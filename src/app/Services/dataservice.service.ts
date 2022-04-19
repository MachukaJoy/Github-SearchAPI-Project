import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../Classes/user'
import { Repo } from '../Classes/repo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
}
