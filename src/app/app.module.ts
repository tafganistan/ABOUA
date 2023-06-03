import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationsListComponent } from './formations-list/formations-list.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { PaiementComponent } from './paiement/paiement.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CoursTradingComponent } from './cours-trading/cours-trading.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { CoursesComponent } from './Admin/courses/courses.component';
import { ClassComponent } from './Admin/class/class.component';
import { ForumsComponent } from './Admin/forums/forums.component';
import { LoginComponent } from './Admin/login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MoreInformationsComponent } from './more-informations/more-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    DashboardComponent,
    FormationsComponent,
    FormationsListComponent,
    HomeComponent,
    ProfilComponent,
    PaiementComponent,
    LandingComponent,
    AboutComponent,
    CoursTradingComponent,
    DasboardComponent,
    CoursesComponent,
    ClassComponent,
    ForumsComponent,
    LoginComponent,
    RecoverPasswordComponent,
    NewPasswordComponent,
    MoreInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
