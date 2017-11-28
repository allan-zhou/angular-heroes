import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class UserService {
    private usersUrl = ' http://192.168.1.217:3000/api/users';

    constructor(
        private http: HttpClient
    ) { }

    getUseres(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }

    getUser(id: number): Observable<User> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.get<User>(url);
    }

    //////// Save methods //////////

    /** POST: add a new user to the server */
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.usersUrl, user, httpOptions);
    }

    /** DELETE: delete the user from the server */
    deleteUser(user: User | number): Observable<User> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.usersUrl}/${id}`;

        return this.http.delete<User>(url, httpOptions);
    }

    /** PUT: update the user on the server */
    updateUser(user: User): Observable<any> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.usersUrl}/${id}`;
        return this.http.put(url, user, httpOptions);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}