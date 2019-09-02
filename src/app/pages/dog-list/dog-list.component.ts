import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs/dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  // dogList: IDog;
  newList: Array<any>;

  constructor(
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.getAllDogs()
  }

  getAllDogs() {
    this.dogsService.getAll()
      .subscribe((res) => {
        const list = [];
        res.rows.forEach(el => {
          list.push(
            {
              title: el.name,
              description: el.size,
              link: `/dog/${el.id}`
            }
          )
        });
        this.newList = list;
      })
  }

  
}
