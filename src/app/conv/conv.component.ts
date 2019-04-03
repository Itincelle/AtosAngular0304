import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  public SommeEnEuro : number 
  public MontantFranc : number ;

  public Conversion(value){
   this.MontantFranc= value *0.2;
  }

  constructor() { }

  ngOnInit() {
  }

}
