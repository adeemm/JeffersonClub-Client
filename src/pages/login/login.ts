import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  viewState = 'signup';
  inputType = 'password';
  loader;

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  user: string;
  pass: string;

  constructor(public nav: NavController, public http: Http, public service: Service, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  public changeState(stateName) {
    this.viewState = stateName;
  }

  presentAlert(header: string, sub: string, button: string) {
    const alert = this.alertCtrl.create({
      title: header,
      subTitle: sub,
      buttons: [button]
    });
    alert.present();
  }

  public login() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let credentials = {
      username: this.user,
      password: this.pass
    };

    this.loader = this.loadingCtrl.create({
     content: "Please wait..."
    });

    this.loader.present().then(()=>{
      this.http.post(this.service.baseUrl + this.service.webPort + '/auth/login', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          this.service.init(res.json());
          this.service.getNews().then(() => {
            this.loader.dismiss();
            this.nav.setRoot("HomePage", {}, {animate: true, direction: 'forward'});
          });
        }, (err) => {
          this.loader.dismiss();
          
           if(err.status != 0)
            this.presentAlert("Error", JSON.parse(err._body).message, "OK");
          else
            this.presentAlert("Connection Error", "Please check your internet conection", "OK");
        });
    });
  }

  public register() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.password
    };

    this.loader = this.loadingCtrl.create({
     content: "Please wait..."
    });

    this.loader.present().then(()=>{
      this.http.post(this.service.baseUrl + this.service.webPort + '/auth/register', JSON.stringify(user), { headers: headers })
        .subscribe(res => {
          this.service.init(res.json());

          let head2 = new Headers();
          head2.append("Content-Type", "application/javascript");
          let designDoc = "{\r\n  \"_id\": \"_design\/hours\",\r\n  \"language\": \"javascript\",\r\n  \"views\": {\r\n    \"date\": {\r\n      \"map\": \"function(doc) { emit(doc.date, { \'title\': doc.title, \'desc\': doc.desc, \'hours\': doc.hours, \'date\': doc.date }); }\"\r\n    }\r\n  }\r\n}";

          this.http.put(res.json().userDBs.student + "/_design/hours", designDoc, head2).subscribe(res => {
            console.log("created design doc");
            this.service.getNews().then(() => {
              this.loader.dismiss();
              this.nav.setRoot("HomePage", {}, {animate: true, direction: 'forward'});
            });
          }, err => {
            console.log(err);
          });

        }, (err) => {
          this.loader.dismiss();

          if(err.status != 0)
            this.presentAlert("Error", "Please enter valid user information for all the fields", "OK");
          else
            this.presentAlert("Connection Error", "Please check your internet conection", "OK");
        });
    });
  }

  public hideShowPassword = function() {
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  };

}
