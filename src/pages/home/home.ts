import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  announcements: Array<{title: string, desc: string}> = new Array();

  constructor(public navCtrl: NavController, public menu: MenuController, public service: Service) {
    let length = this.service.news.rows.length;

    for (var i = 0; i < length; i++) {
      let element = this.service.news.rows[i];
      this.announcements.push({ title: element.doc.title, desc: element.doc.desc });
    }
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true, 'mainSlideMenu');
    this.menu.enable(true, 'mainSlideMenu');
    this.service.getServiceHours();
    this.service.getEvents();
  }
  
}
