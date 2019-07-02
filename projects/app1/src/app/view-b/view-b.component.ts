import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-view-b',
  templateUrl: './view-b.component.html',
  styleUrls: ['./view-b.component.css']
})
export class ViewBComponent implements OnInit {

  public label: string;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.label = this.testService.getLabel();
  }
}
