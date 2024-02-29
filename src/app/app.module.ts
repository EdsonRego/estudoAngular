import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { personasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

//decorador NgModule da classe AppMoodule{}
@NgModule({
  declarations: [
    AppComponent, personasComponent, PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
