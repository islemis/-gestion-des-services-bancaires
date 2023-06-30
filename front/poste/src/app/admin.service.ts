import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Compte } from './compte.model';
import { Client } from './client.model';
import { Demandecarte } from './demandecarte.model';
import { Demandechequier } from './demandechequier.model';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  listEtudiant: Client[] = [];

  getadmins(): Observable<any> {
    return this.http.get('http://localhost:3000/admins ');
  }

  constructor(private http: HttpClient) {}
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  getClients(): Observable<any> {
    return this.http.get('http://localhost:3000/client ');
  }
  getClient(idc: number) {
    return this.http.get('http://localhost:3000/getclient/' + idc);
  }
  deleteClient(idc: string): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    console.log(idc);
    return this.http.delete('http://localhost:3000/client/' + idc);
  }

  logout() {
    return this.http.post('http://localhost:3000/logout', {});
  }
  createClient(client: Client): Observable<any> {
    return this.http
      .post('http://localhost:3000/ajoutclient/', client)
      .pipe(catchError(this.handleError));
  }

  updateClient(updateClient: Client, idc: number): void {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    console.log(updateClient);
    this.http
      .put<Client[]>('http://localhost:3000/update/' + idc, updateClient, {
        headers: httpHeaders,
      })
      .subscribe(
        (data) => {},
        (err) => console.log(err)
      );
  }
  createCompte(compte: Compte): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    return this.http
      .post('http://localhost:3000/ajoutcompte', compte)
      .pipe(catchError(this.handleError));
  }
  deleteCompte(id: number): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    console.log(id);
    return this.http.delete('http://localhost:3000/compte/' + id);
  }
  getcompte(id: number) {
    return this.http.get('http://localhost:3000/getcompte/' + id);
  }
  getcomptes(): Observable<Compte> {
    return this.http.get('http://localhost:3000/comptes');
  }
  getdemandecarte(): Observable<Demandecarte> {
    return this.http.get('http://localhost:3000/demandecartes ');
  }

  getdemandechequier(): Observable<Demandechequier> {
    return this.http.get('http://localhost:3000/demandechequiers ');
  }
  createDemandeCarte(demandecarte: Demandecarte): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    return this.http
      .post('http://localhost:3000/demande_carte', demandecarte)
      .pipe(catchError(this.handleError));
  }
  accepterDemandecarte(
    updateDemandecarte: Demandecarte,
    id_dec: number
  ): Observable<any> {
    return this.http.put(
      'http://localhost:3000/demandecarte/' + id_dec,
      updateDemandecarte
    );
  }
  refuserDemandecarte(
    updateDemandecarte: Demandecarte,
    id_dec: number
  ): Observable<any> {
    return this.http.put(
      'http://localhost:3000/n/' + id_dec,
      updateDemandecarte
    );
  }

  accepterDemandechequier(
    updateDemandechequier: Demandechequier,
    id_dch: number
  ): Observable<any> {
    return this.http.put(
      'http://localhost:3000/demandechequier/' + id_dch,
      updateDemandechequier
    );
  }
  refuserDemandechequier(
    updateDemandechequier: Demandechequier,
    id_dch: number
  ): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };

    return this.http.put(
      'http://localhost:3000/demandechquier/' + id_dch,
      updateDemandechequier
    );
  }
  createDemandechequier(Demandechequier: Demandechequier): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    return this.http
      .post('http://localhost:3000/demande_chequier', Demandechequier)
      .pipe(catchError(this.handleError));
  }
  getuneDemandecarte(id: number) {
    return this.http.get('http://localhost:3000/getdemandec/' + id);
  }
  getuneDemandechequier(id: number) {
    return this.http.get('http://localhost:3000/getdemandech/' + id);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  deletedemandecarte(idc: number): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    console.log(idc);
    return this.http.delete('http://localhost:3000/carte/' + idc);
  }
  deletedemandechéquier(idc: number): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    console.log(idc);
    return this.http.delete('http://localhost:3000/chequier/' + idc);
  }
}
