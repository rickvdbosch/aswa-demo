import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Entity } from '../models/entity';
import { environment } from '../../environments/environment';

const baseUrl: string = environment.serviceBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { 
  }

  public getData(): Observable<Entity[]> {
    return this.httpClient.get<Entity[]>(`${baseUrl}data`);
  }
}
