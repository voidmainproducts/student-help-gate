import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LoadingComponent } from './components/loading/loading.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ChartsComponent } from './components/charts/charts.component';
import { HomeComponent } from './components/home/home.component';
import {NgxPaginationModule} from "ngx-pagination";
import { FooterComponent } from './components/footer/footer.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkW8WeN6wOScmPItVKjjsaNXGytgP2iT0",
  authDomain: "student-help-gate.firebaseapp.com",
  projectId: "student-help-gate",
  storageBucket: "student-help-gate.firebasestorage.app",
  messagingSenderId: "24848317213",
  appId: "1:24848317213:web:3faf31ddb8aae8aca67ff4",
  measurementId: "G-DH8BGTRB0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    LoadingComponent,
    NoticesComponent,
    ChartsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
