import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class ApiService {

  loading = false;
  private readonly url: string;

  constructor(url = '', private http: HttpClient) {
    this.url = environment.host + url;
  }

  get(uri = '', params = {}): Observable<any> {
    this.before();
    return this.http
      .get(this.getEndpoint(uri), {
        params: this.prepareHttpParams(params)
      })
      .pipe(
        finalize(this.after),
        catchError(this.handleError.bind(this))
      );
  }

  post(uri = '', params = {}): Observable<any> {
    this.before();
    return this.http
      .post(this.getEndpoint(uri), this.prepareHttpParams(params))
      .pipe(
        finalize(this.after),
        catchError(this.handleError.bind(this))
      );
  }

  private before() {
    this.loading = true;
  }

  private after() {
    this.loading = false;
  }

  private prepareHttpParams(params = {}): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).map(key => {
      httpParams = httpParams.append(key, params[key]);
    });
    return httpParams;
  }

  private getEndpoint(uri) {
    return this.url + uri;
  }

  private handleError(error) {
    if (error) {
      // do something if we are have business logic error
    }
    return of(error);
  }
}
