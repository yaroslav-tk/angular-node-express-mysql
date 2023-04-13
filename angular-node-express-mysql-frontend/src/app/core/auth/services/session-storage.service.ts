import { Inject, Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

  constructor(private window: Window) { }

  setItem(key: string, value: string) {
    this.window.sessionStorage.setItem(key, value)
  }

  getItem(key: string): string | null {
    return this.window.sessionStorage.getItem(key)
  }

  deleteItem(key: string) {
    this.window.sessionStorage.removeItem(key)
  }
}
