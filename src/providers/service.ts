import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Service {

  remote: any;
  token: string;
  key: string;
  headers: any;
  hours: any;
  events: any;
  news: any;
  baseUrl = "http://localhost";
  webPort = ":3000";
  dbPort = ":5984";

  constructor(public http: Http, public alertCtrl: AlertController, private nativeStorage: NativeStorage) {
  }

  presentAlert(header: string, sub: string, button: string) {
    const alert = this.alertCtrl.create({
      title: header,
      subTitle: sub,
      buttons: [button]
    });
    alert.present();
  }

  init(details){
    console.log(details);
    this.remote = details.userDBs.student;
    this.token = details.token;
    this.key = details.password;
    this.headers = new Headers();
    this.headers.append("Authorization", "Bearer " + String(this.token) + ":" + String(this.key));

    this.nativeStorage.setItem('token', details.token).then(() => console.log('Stored token'), error => console.error('Error storing token', error));
    this.nativeStorage.setItem('key', details.password).then(() => console.log('Stored key'), error => console.error('Error storing key', error));
    this.nativeStorage.setItem('url', details.userDBs.student).then(() => console.log('Stored url'), error => console.error('Error storing url', error));
  }

  logout() {
    this.http.post(this.baseUrl + this.webPort + '/auth/logout', null, { headers: this.headers })
      .subscribe(res => {
          this.nativeStorage.clear().then(() => console.log('Cleared storage'), error => console.error('Error clearing storage', error));
      }, (err) => {
        console.log(err);
    });
  }

  addServiceHours(doc) {
    this.http.post(this.remote, doc, { headers: this.headers })
      .subscribe(res => {
        this.presentAlert("Sucess", "Hours sucessfully logged!", "OK");
        this.getServiceHours();
      }, (err) => {
        console.log(err);
    });
  }

  getServiceHours()
  {
    this.http.get(this.remote + "/_design/hours/_view/date")
      .subscribe(res => {
        this.hours = res.json();
      }, (err) => {
        console.log(err);
    });
  }

  getEvents()
  {
    this.http.get(this.baseUrl + this.dbPort + "/events/_design/events/_view/start")
      .subscribe(res => {
        this.events = res.json();
      }, (err) => {
        console.log(err);
    });
  }

  getNews()
  {
    return new Promise(resolve => {
      this.http.get(this.baseUrl + this.dbPort + "/news/_all_docs?include_docs=true")
        .subscribe(res => {
          this.news = res.json();
          resolve();
        }, (err) => {
          console.log(err);
      });
    });
  }
}
