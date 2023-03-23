import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  states:any;
  districts:any;
  talukas:any;
  villages:any;


  constructor(private api : ApiService){

  }

  selectedState ="";
  selectedDistrict ="";
  selectedTaluka ="";
  selectedVillage ="";

  ngOnInit(): void {
    this.api.get("states").subscribe((result:any)=>{
      console.log(result.data);
      this.states =result.data;
      // console.log(this.states[1].name);
      
      
    })
  }
  changeState(event:Event){
    // console.log(event);  // check event format
    // console.log(event.target);  // check event format
    let ctrl = <HTMLSelectElement>(event.target);
    // console.log(ctrl.value);
    let stateid = ctrl.value;
    
    

    this.api.get("districts/" + stateid).subscribe((result:any)=>{
      // console.log(result.data);
      this.districts = result.data;
      
    }) 
  }

  changeDistrict(event:any){
      // console.log(event.target);
      let ctrl = <HTMLSelectElement>(event.target).value;
      // console.log(ctrl);
      let districtid = ctrl;

      this.api.get("talukas/" + districtid).subscribe((result:any)=>{
        // console.log(result.data);
        this.talukas = result.data
      })     
  }

  changeTaluka(event:any){
      let talukaid = <HTMLSelectElement>(event.target).value;
      // console.log(talukaid);

      this.api.get("villages/" + talukaid).subscribe((result:any)=>{
        // console.log(result);
        this.villages = result.data;

        
      })
      
      
  }

}
