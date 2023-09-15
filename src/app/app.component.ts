import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstAngApp';
  newItem: string = "";
  allItems: string[] = [];
  venues:string[] = ['marena','sunder'];
  isDisplayed:boolean = false;
  isDisplayed1:boolean = false;
  truItem:string[]=[];
  ifChecked(event:any,item:string){
    this.isDisplayed =!this.isDisplayed
    
  }
  ifChecked1(event:any,item:string){
    this.isDisplayed1 =!this.isDisplayed1
    if(event.target.checked===true)
      this.addVen(item);
  }

  addVen(Vitem:string){
    this.truItem.push(Vitem);
  }

  addItem(){
    this.allItems.push(this.newItem);
    this.newItem = '';
  }

  remVen(item:string){
    const i:number = this.truItem.indexOf(item);
    if(i!==-1)
      this.allItems.splice(i,1);
  }

  remItem(item:string){
    const i:number = this.allItems.indexOf(item);
    if(i!==-1)
      this.allItems.splice(i,1);
  }
}
