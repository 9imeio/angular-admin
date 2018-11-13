import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConfigService } from './config.service';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    GalleryComponent,
    FooterComponent,
    EventsComponent,
    NavigationComponent,
    LoginComponent,
    ArticleComponent,
    PostComponent,
    NotfoundComponent,
    ContactusComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
