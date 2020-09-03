import { Component, OnInit } from '@angular/core';
import {AsterisksService} from '../asterisks.service';
import {Asterisks} from '../asterisks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  asterisks: Array<Asterisks> = [];

  constructor(private asterisksService: AsterisksService) { }

  ngOnInit(): void {
     [5, 7, 9, 11, 13, 15].forEach((size) => {
       this.asterisks = this.asterisks.concat({
         matrixSize: size,
         asterisks: this.asterisksService.getAsterisks(size)
       });
     });
  }
}
