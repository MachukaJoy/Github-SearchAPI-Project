import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  githubUsername!: string;
  githubsearchForm!: FormGroup; 
  getUser() {
    this.githubUsername = this.githubsearchForm.value.githubUsername

    this.userdetailsroute.navigate([`user/${this.githubUsername}`])
  }

  constructor(private userdetailsroute:Router) { }

  ngOnInit(): void {
    this.githubsearchForm = new FormGroup({
      githubUsername: new FormControl(
        null,
        [Validators.required]
      )
    })
  }

}
