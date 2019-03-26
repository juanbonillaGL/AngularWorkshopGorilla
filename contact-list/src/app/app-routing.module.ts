import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  { path: 'create', component: ContactCreateComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: '', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
