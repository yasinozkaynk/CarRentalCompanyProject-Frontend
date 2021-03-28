import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/serviices/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;

  constructor( private colorService:ColorService,
    private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.colors=response.data
    })
  }
  setCurrentCategory(color:Color){
    this.currentColor = color;
  }

  getCurrentCategoryClass(color:Color){
    if(color ==this.currentColor){
      return "list-group-item "
    }else{
      return ""
    }
  }

  getAllCategoryClass(){
       if(!this.currentColor){
        return "list-group-item active "
       }
       else{
        return "list-group-item"
       }
  }

}
