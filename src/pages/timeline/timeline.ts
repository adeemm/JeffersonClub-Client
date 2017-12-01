import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  timeline: Array<{title: string, date: any, hours: any, desc: string}> = new Array();
  noService = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {

    if(this.service.hours.total_rows != 0) {
      this.noService = false;
      let length = this.service.hours.rows.length;

      for (var i = 0; i < length; i++) {
        let element = this.service.hours.rows[i];
        this.timeline.push({ title: element.value.title, date: new Date(element.key.replace(/-/g, '\/')), hours: element.value.hours, desc: element.value.desc });
      }
    }

    // this.timeline = [
    //   { title: 'Event 1', date: new Date("September 5, 2017"), hours: "5", desc: "todo: get from db" },
    //   { title: 'Event 2', date: new Date("September 6, 2017"), hours: "7", desc: "and fix styles" }
    // ];
  }

}
