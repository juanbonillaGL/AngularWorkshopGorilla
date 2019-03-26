import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Contact} from 'src/app/core/models/contact.interfaces';
import { ApiService } from './api/api.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private apiService: ApiService) {}

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }

  getContacts(): Observable<Array<Contact>> {
    return this.apiService
      .get<Contact[]>(environment.endpointUsuarios)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  deleteContact(contactId:String){
    return this.apiService.delete(environment.endpointUsuarios.concat("/"+contactId));
  }

  createContact(contact:Contact){
    return this.apiService.post(environment.endpointUsuarios, contact);
  }
}
