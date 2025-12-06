import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { Auth, authState } from '@angular/fire/auth'
import { map, take } from 'rxjs/operators'

export const athGuard: CanActivateFn = () => {
  const auth = inject(Auth)
  const router = inject(Router)

  return authState(auth).pipe(
    take(1),
    map(user => {
      if (user) {
        return true
      }
      router.navigateByUrl('/login')
      return false
    })
  )
}
