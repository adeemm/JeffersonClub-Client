import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../providers/service';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  logForm: FormGroup;
  submitAttempt: boolean = false;
  today: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: Service) {
    this.logForm = formBuilder.group({
        title: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
        desc: ['', Validators.compose([Validators.maxLength(250), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        date: ['', Validators.required],
        hours: ['', Validators.compose([Validators.pattern('([0-9]|1[0-9]|2[0-4])'), Validators.required])]
    });
  }

  logHours() {
    this.submitAttempt = true;

    if(this.logForm.valid)
      this.service.addServiceHours(this.logForm.value);
  }
}
