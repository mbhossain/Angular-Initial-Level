import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService{
  private storage: Storage;
  constructor() {
    this.storage = localStorage;
  }

  saveUserName(username: string): void{
    this.storage.setItem('username', username);
  }

  getUserName(): string{
    return this.storage.getItem('username');
  }
}
