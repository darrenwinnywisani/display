import { Component, OnInit, Input } from '@angular/core';
import { Add } from '../add';
import { NAMEE } from '../booking';
@Component({
  selector: 'app-namee',
  templateUrl: './namee.component.html',
  styleUrls: ['./namee.component.css']
  
})
export class NameeComponent implements OnInit {
  title = '';
  ngname:string;
  name:string;

  ngsurname:string;
  surname:string;
  selectedAdd: Add;
  add: Add = {
    id: 1,
    name: 'Windstorm'
  };
  selectedbooking='enter booking';
  bookings=["enter booking","hotel", "bus", "computer"];
 
  locFrom :String;
  locationFrom=['pta','Jhb','Giyani'];
  locationTOO=['pta','Jhb','Giyani'];

booking='Windstorm';

adds(){
  this.name="" +this.ngname+this.ngsurname;
 }
 

  ngOnInit() {
  }
  onSelect(add: Add): void {
    this.selectedAdd = add;
  }

}
