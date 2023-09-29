import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private currentUser: string | null = null;

  setCurrentUser(user: string): void {
    this.currentUser = user;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
