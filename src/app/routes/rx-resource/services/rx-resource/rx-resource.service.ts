import { inject, Injectable, ResourceLoaderParams } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { IUser } from '@interfaces/i-user'

@Injectable({ providedIn: 'root' })
export class RxResourceService {
  private http: HttpClient = inject(HttpClient)

  rxResourceLoader(params: ResourceLoaderParams<number>): Observable<IUser> {
    const { request: uid } = params
    if (uid == null) return of(null)
    return this.http.get<IUser>(`https://dummyjson.com/users/${uid}?delay=2000`).pipe()
  }
}
