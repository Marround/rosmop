import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UploadfileService {

  constructor(private _http: Http) { }
  private _errorHandler(error: Response) {
    return Observable.throw(error || 'Server failed');
  }
  public getFileList(source: string, sourcePath: string) {
    const formData: FormData = new FormData();
    formData.append('sPath', sourcePath);
    return this._http.post(source, formData).catch(this._errorHandler).map((response: Response) => {
      return response.json();
    });
  }
  postFile(fileToUpload: File, sourcePath: string): Observable<boolean> {
    const source = 'http://marround.ru/upload.php';
    const formData: FormData = new FormData();
    formData.append('sPath', sourcePath);
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._http.post(source, formData)
      .catch((e) => this._errorHandler(e))
      .map((response: Response) => { return response.json(); });
  }
}
