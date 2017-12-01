import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http, Headers } from '@angular/http';
import { Service } from '../providers/service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
  activePage: any;
  public serviceProvider;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController, public service: Service, private nativeStorage: NativeStorage, public http: Http) {
    this.initializeApp();

    this.pages = [
      { title: 'Announcements', component: "HomePage", icon: "md-notifications" },
      { title: 'Events', component: "EventsPage", icon: "md-calendar" },
      { title: 'Service Timeline', component: "TimelinePage", icon: "md-pin" },
      { title: 'Service Log', component: "ServicePage", icon: "md-time" },
      { title: 'About', component: "AboutPage", icon: "md-information-circle" },
      { title: 'Logout', component: "LoginPage", icon: "md-exit" }
    ];

    this.activePage = this.pages[0];
    this.serviceProvider = service;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.menu.swipeEnable(false, 'mainSlideMenu');
      this.menu.enable(false, 'mainSlideMenu');

      this.nativeStorage.getItem('notFirstRun').then(result => {
        if(result)
        {
          this.nativeStorage.getItem('token').then(token => {
            this.nativeStorage.getItem('key').then(key => {
              this.nativeStorage.getItem('url').then(url => {

                this.service.headers = new Headers();
                this.service.headers.append("Authorization", "Bearer " + token + ":" + key);
                this.service.remote = url;

                this.http.get(this.service.baseUrl + this.service.webPort + "/auth/session", { headers: this.service.headers }).subscribe(res => {
                  if(res.status != 401) {
                    this.service.getNews().then(() => {
                      this.rootPage = "HomePage";
                      this.splashScreen.hide();
                    });
                  }
                  else {
                    this.nativeStorage.remove('token');
                    this.nativeStorage.remove('key');
                    this.nativeStorage.remove('url');
                    this.splashScreen.hide();
                  }
                });

            }, error3 => console.error('Error getting url', error3));
          }, error2 => console.error('Error getting key', error2));
        }, error1 => console.error('Error getting token', error1));
        }
      }, error => {
        this.nativeStorage.setItem('notFirstRun', true).then(() => console.log('Stored run!'), error => console.error('Error storing run', error));
        this.rootPage = "WelcomePage";
        this.splashScreen.hide();
      });
    });
  }

  openPage(page) {
    if(page.title == 'Logout')
      this.logout();

    else {
      this.nav.setRoot(page.component);
      this.activePage = page;
    }
  }

  logout() {
    this.service.logout();
    this.nav.setRoot("LoginPage", {}, {animate: true, direction: 'backward'});
    this.activePage = this.pages[0];
  }

  checkActive(page) {
    return page == this.activePage;
  }
}
