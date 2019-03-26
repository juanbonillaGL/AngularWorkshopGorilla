import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './stores/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './stores/effects';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactCreateComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
