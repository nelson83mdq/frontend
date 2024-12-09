import { Component } from '@angular/core';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  message: any;


  constructor(private api: ApiService){
    this.api.getMessage().subscribe(msg=>{
      this.message = msg;
      console.log(msg);
      
    })
  }
}
