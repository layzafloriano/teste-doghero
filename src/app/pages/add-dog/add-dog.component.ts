import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { DogsService } from 'src/app/services/dogs/dogs.service';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {
  dogsForm = this.fb.group({
    name: ['', Validators.required],
    age:[''],
    ageGroup: [''],
    size: [''],
    // ownerID: ['']
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dogsService: DogsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.dogsForm.value)
    this.dogsService.add(this.dogsForm.value)
      .subscribe((res)=> {
        // this.router.navigate(['/dog', res.id])
        console.log(res)
      });
  }
}