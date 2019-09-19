import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  public pop() {
    this.appService.pop();
  }

}
