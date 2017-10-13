import { Injectable } from '@angular/core';
import { Component } from './Component';



let List: Component[] = [
  new Component("Tenrox-R1_1235", "", "", "Pending", 0, false, false, false),
  new Component("432462", "jtuck", "4/18/2014 12:12pm", "Running", 1, false, false, false),
  new Component("432461", "samy", "4/18/2014 10:53am", "Rejected", 2, true, true, true),
  new Component("Tenrox-R1_1234", "", "4/17/2014 9:42am", "Complete", 3, true, true, true),
  new Component("432460", "samy", "4/17/2014 7:51am", "Rejected", 2, false, false, false), 
  new Component("432459", "samy", "4/16/2014 6:43am", "Accepter", 3, true, true, true),
];


@Injectable()
export class ComponentServices{


    private componentList: Component[];

    constructor(){   
        this.componentList = List;
    }

    getProducts(): Component[]{
        return this.componentList;
    }


}