import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }


//    public auth(code: string): Observable<any> {
//
//        return this.http.get(environment.apiEndpoint + '?code=' + code)
//
//    }
//
//    public getLoginUrl(): Observable<any> {
//
//        return this.http.get(environment.apiEndpoint + '/loginUrl').map((data) => this.extractData(data))
//    }
//    public getLoginUrlByTendant(tendantId): Observable<any> {
//
//        return this.http.post(environment.apiEndpoint + '/loginUrlByTendant',{tendantId:tendantId}).map((data) => this.extractData(data))
//    }
//
//    public logout(): Observable<any> {
//        return this.http.get(environment.apiEndpoint + '/logout')
//    }
//
//    public isLoggedIn(): Observable<any> {
//        return this.http.get(environment.apiEndpoint + '/isLoggedIn').map((data) => this.extractData(data))
//
//    }
//
//
//    private extractData(res: Response) {
//        let body = res.json();
//        return body;
//    }

}
