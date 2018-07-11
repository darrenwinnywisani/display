import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  ngname:string;
  name:string;

  display(){
   this.name="welcome "+this.ngname;
  }
  
}
