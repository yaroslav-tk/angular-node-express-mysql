import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserStoreService {
  private userName$$ = new BehaviorSubject<string>('');

  userName$: Observable<string> = this.userName$$.asObservable();

  constructor(
    private userService: UserService
  ) { }

  loadUser() {
    this.userService.getUser()
      .subscribe(({name}) => {
        this.userName$$.next(name)})
  }
}
