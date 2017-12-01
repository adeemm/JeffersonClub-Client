import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController, public service: Service) {
    let added = this.eventSource;

    //month - 1

    if(this.service.events.total_rows != 0) {
      let length = this.service.events.rows.length;
      let tz = new Date().getTimezoneOffset();

      for (var i = 0; i < length; i++) {
        let element = this.service.events.rows[i];
        added.push({
          title: element.value.title,
          startTime: new Date(new Date(element.key).getTime() + tz * 60000),
          endTime: new Date(new Date(element.value.end).getTime() + tz * 60000),
          allDay: false
        });
      }
    }

    // added.push({
    //     title: head,
    //     startTime: start,
    //     endTime: end,
    //     allDay: all
    // });

    this.eventSource = added;
  }

  changeMonth(action: number) {
    if(action == 1)
      this.calendar.currentDate = moment(this.calendar.currentDate).subtract(1, 'month').toDate();
    else if(action == 2)
      this.calendar.currentDate = new Date();
    else
      this.calendar.currentDate = moment(this.calendar.currentDate).add(1, 'month').toDate();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
