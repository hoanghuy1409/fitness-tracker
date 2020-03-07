import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";

import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AuthService } from "./auth/auth.service";
import { environment } from "../environments/environment";
import { TrainingService } from "./training/training.service";
import { UIService } from "./shared/ui.service";
import { FormsModule } from "@angular/forms";
import { TrainingModule } from "./training/training.module";
import { TrainingRoutingModule } from "./training/training-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule
  ],
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
