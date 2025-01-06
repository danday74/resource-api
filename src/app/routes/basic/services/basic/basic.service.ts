import { Injectable, ResourceLoaderParams } from '@angular/core'
import { IUser } from '@interfaces/i-user'
import { find } from 'lodash-es'
import { users } from '@routes/basic/data/users'
import { myAppConfig } from '../../../../my-app-config'

@Injectable({ providedIn: 'root' })
export class BasicService {
  basicLoader(params: ResourceLoaderParams<number>): Promise<IUser> {
    const { request: uid } = params
    return new Promise((resolve) => {
      const user: IUser = find(users, { id: uid })
      setTimeout(() => resolve(user), myAppConfig.delay)
    })
  }
}
