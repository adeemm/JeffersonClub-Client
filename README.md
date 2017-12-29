# JeffersonClub-Client
A hybrid mobile app for easily managing community service hours

I created this app for an extracurricular group at my school, so that they can easily track each member's volunteering and promote more community service involvement.

## Features
* Welcome intro slides to quickly brief the user of the app's main features
* Login token remembering, eliminating the annoyance of logins at every app launch
* Customizable app announcements that appear on the home page
* Calendar that fetches events from the backend (community service opportunities & other important events)
* Form to upload the user's community service activities (date, hours, details etc.)
* An automatically sorted service hour timeline, which lists all of the user's uploaded activities in chronological order
* Lazy page loading, to speed up the slow inital app load time for hybrid apps
  - Hybrid apps must launch a native WebView and load the main web files (usually in one large chunk), which can be slow for the user
  - Lazy loading splits pages up into seperate, smaller chunks and loads them only when requested / loaded

## Technology Stack
* Ionic Framework
  - AngularJS / TypeScript
  - Adobe Cordova (provides native web wrappers for specific platforms)
* CouchDB Database

## Screenshots
<p align="center">
  <img src="/screenshots/welcome.png" width="350"/> &nbsp; &nbsp; &nbsp;
  <img src="/screenshots/menu.png" width="350"/>
  <br> <br>
  <img src="/screenshots/calendar.png" width="350"/> &nbsp; &nbsp; &nbsp;
  <img src="/screenshots/timeline.png" width="350"/>
</p>
