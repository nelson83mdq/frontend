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
  gcode_text:string = '';

  constructor(private api: ApiService){
    this.api.getMessage().subscribe(msg=>{
      this.message = msg;
      console.log(msg);
      
    })
  }

  onFileChange(event: Event){
    let target = event.target as HTMLInputElement;
    if (target.files !== null && target.files.length >0){
      // console.log('print evento');
      // console.log(target.files[0]);
      let file = target.files[0];
      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = event => this.gcode_text = String(reader.result);

    }
    
    
  }
}
