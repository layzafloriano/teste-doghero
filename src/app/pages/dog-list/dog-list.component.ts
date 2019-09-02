import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs/dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogList: any;

  constructor(
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.getAllDogs()
  }

  getAllDogs() {
    this.dogsService.getAll()
      .subscribe((res) => {
        this.dogList = res.rows;
      })
  }

}
