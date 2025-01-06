import { Injectable, ResourceLoaderParams } from '@angular/core'
import { IUser } from '@interfaces/i-user'
import { find } from 'lodash-es'
import { users } from '@routes/basic/data/users'

@Injectable({ providedIn: 'root' })
export class BasicService {
  basicLoader(params: ResourceLoaderParams<number>): Promise<IUser> {
    const { request: uid } = params
    return new Promise((resolve) => {
      const user: IUser = find(users, { id: uid })
      resolve(user)
    })
  }
}
