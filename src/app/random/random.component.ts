import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.mainService.getdata()
  }

}
