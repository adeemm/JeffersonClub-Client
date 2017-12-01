import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { EventsPage } from './events';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(EventsPage)
  ],
})
export class EventsPageModule {}
