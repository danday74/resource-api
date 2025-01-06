import { Injectable, ResourceLoaderParams } from '@angular/core'
import { IUser } from '@interfaces/i-user'

@Injectable({ providedIn: 'root' })
export class FetchService {
  async fetchLoader(params: ResourceLoaderParams<number>): Promise<IUser> {
    const { request: uid, abortSignal } = params
    if (uid == null) return Promise.resolve(null)
    const res: Response = await fetch(`https://dummyjson.com/users/${uid}?delay=2000`, { signal: abortSignal })
    return await res.json() as Promise<IUser>
  }
}
