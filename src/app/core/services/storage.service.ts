import { Injectable } from '@angular/core';
import storage from 'local-storage-fallback';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  static get(key: any): any {
    return JSON.parse(storage.getItem(key));
  }

  static set(key: string, data: any): void {
    data = JSON.stringify(data);
    storage.setItem(key, data);
  }

  static remove(key: string): void {
    storage.removeItem(key);
  }

  static clear(): void {
    storage.clear();
  }

  static has(key: string): boolean {
    return !!StorageService.get(key);
  }
}
