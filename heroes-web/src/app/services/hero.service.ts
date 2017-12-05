import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ErrorHandler } from '../utils/ErrorHandler';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://192.168.1.217:3000/api/heroes';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(
        private http: HttpClient
    ) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .toPromise()
            .then(response => response)
            .catch(ErrorHandler.handleServiceError);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url)
            .toPromise()
            .then(response => response)
            .catch(ErrorHandler.handleServiceError);
    }

    //////// Save methods //////////

    /** POST: add a new hero to the server */
    addHero(hero: Hero): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    /** DELETE: delete the hero from the server */
    deleteHero(hero: Hero | number): Promise<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;

        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    /** PUT: update the hero on the server */
    updateHero(hero: Hero): Promise<any> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError(error: any): Promise<any> {
        // console.error(error);
        return Promise.reject(error.message || error)
            .catch((err) => {
                // console.log(err);
                if (error.status === 401) {
                    console.log(error);
                    console.log(window);
                    // console.log(this.activated);
                    // console.log(this.location);
                }
                throw error;
            });
    }
}