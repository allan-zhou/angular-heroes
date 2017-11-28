import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class PassportService {
    private usersUrl = ' http://192.168.1.217:3000/api/auth';

    constructor(
        private http: HttpClient
    ) { }
    
}