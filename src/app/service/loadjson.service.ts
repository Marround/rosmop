import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoadJsonService {

  constructor(public _http: Http) { }

  getJSON(url: string) {
    return this._http.get(url).map((response: Response) => response.json()).catch(this.handleError);
  }
  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || 'Server error');
  }
}
