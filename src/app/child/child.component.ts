import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent { 
@Input() public name:string="";
@Output() childmsg=new EventEmitter();
constructor(){}

sendChildtoParent(){
  this.childmsg.emit("this Call or Data From Child");
}
// sendDataFromChild(){
  // ngOnIt():void{}
//   this.childtoParentEvent.emit(this.message);
// }
}
