import { Injectable, ResourceLoaderParams } from '@angular/core'
import { IUser } from '@interfaces/i-user'
import { myAppConfig } from '../../../../my-app-config'

@Injectable({ providedIn: 'root' })
export class FetchService {
  async fetchLoader(params: ResourceLoaderParams<number>): Promise<IUser> {
    const { request: uid, abortSignal } = params
    if (uid == null) return Promise.resolve(null)
    const res: Response = await fetch(`https://dummyjson.com/users/${uid}?delay=${myAppConfig.delay}`, { signal: abortSignal })
    return await res.json() as Promise<IUser>
  }
}
