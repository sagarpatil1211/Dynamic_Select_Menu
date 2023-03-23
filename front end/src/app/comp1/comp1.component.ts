import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  states = ['Maharashtra','Karnataka']
  selectedState = 'Maharashtra';
  selectedDistrict = 'Kolhapur'
  allState = [
    { state :"Maharashtra", district :"Kolhapur"},
    { state :"Maharashtra", district :"Satara"},
    { state :"Maharashtra", district :"Sangali"},
    { state :"Karnataka", district :"Belagavi"},
    { state :"Karnataka", district :"Bengaluru."},
    { state :"Karnataka", district :"Bagalkot"},
  ]

  state =[{state : "", district : ""}]
  
  constructor(){
    this.changestate();
  }


  changestate(){
    // console.log(data);
    this.state = this.allState.filter((value:any)=>{
      if(value.state === this.selectedState){
        // console.log(value);
        
        return value
      }
    })
    console.log(this.state[0].district);
    

    this.selectedDistrict = this.state[0].district   
  }
}
