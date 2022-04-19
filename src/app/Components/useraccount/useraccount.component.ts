import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

}
