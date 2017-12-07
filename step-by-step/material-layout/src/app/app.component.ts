import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  links = [];

  ngOnInit() {
    this.links = [{
      name: '首页',
      url: '/dashboard'
    }, {
      name: '个人资料',
      url: '/profile'
    }, {
      name: '图表',
      url: '/charts'
    }, {
      name: '报表',
      url: '/reports'
    }, {
      name: '通讯录',
      url: '/contact'
    }, {
      name: '系统设置',
      url: '/settings'
    }]
  }

}
