import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';



@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,MatFormFieldModule,MatRadioModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  public parentmsg:string="";
 public parentName='siri'

}
