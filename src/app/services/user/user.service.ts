import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService
{
    constructor(private http: Http)
    {
    }

    public isLoggedIn(): Observable<boolean>
    {
        return this.http.get(environment.apiEndpoint + '/auth/applicant/login').map((data) => this.extractData(data))
    }

    private extractData(res: Response)
    {
        let body = res.json();
        return body;
    }
}
