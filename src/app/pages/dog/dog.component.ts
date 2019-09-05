import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs/dogs.service';
import { ActivatedRoute } from '@angular/router';
import { IDog } from 'src/app/interfaces/dog.interface';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dog: IDog;
  dogId:string = '';

  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dogId = this.route.snapshot.paramMap.get("id");
    this.getDog(this.dogId);
  }

  getDog(id) {
    this.dogsService.getById(id)
      .subscribe((res)=> {
        this.dog = res;
        console.log(this.dog);
      })
  }
}
