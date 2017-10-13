import { Component, OnInit } from '@angular/core';
import { ComponentServices } from '../shared/component.service'
import { RowComponent } from '../row/row.component'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private componentServices: ComponentServices,
              private rowComponent: RowComponent) { }

  ngOnInit() {
  }

}
