import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    GalleryComponent,
    FooterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
