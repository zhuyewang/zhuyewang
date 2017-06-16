import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery:any;  //定义jquery

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*右侧广告列表的上下滚动效果*/
  @Input()  top: any;
  @Output() topChange = new EventEmitter<any>();
  inc() {
      this.reTop(-126);
  }
  reTop(delta: number) {
    this.top = delta;
    this.topChange.emit(this.top);
  }

}
