import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agri-tourisme',
  templateUrl: './agri-tourisme.component.html',
  styleUrls: ['./agri-tourisme.component.css']
})
export class AgriTourismeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toLeft() {
    var lis:any = document.getElementById("box").getElementsByTagName('li');
    console.info(lis);
    var box:any = document.getElementById("box");
    box.style.width = lis.length * 240 + "px";
    box.style.left = -240 + parseInt(box.style.left) + "px";

    if (parseInt(box.style.left) <= -(lis.length - 3) * 240) {
      box.style.left = -(lis.length - 3) * 240 + "px";
    }
  }
  toRight() {
    var box:any = document.getElementById("box");
    box.style.left = 240 + parseInt(box.style.left) + "px";
    if( box.style.left >= '0' ) {
      box.style.left = '0';
    }
  }
}
