import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export abstract class BaseStore<T extends { name: string }> {
  private readonly internalStore$ = new BehaviorSubject<T[]>([]);
  private readonly selectedOneStore$ = new BehaviorSubject<T | null>(null);

  set(items: T[]): void {
    this.internalStore$.next(items);
  }

  setOne(item: T): void {
    this.selectedOneStore$.next(item);
  }

  selectOne(name: string): T | undefined {
    const items = this.internalStore$.value;
    return items.find(city => city.name === name);
  }

  readonly store = this.internalStore$.asObservable();
  readonly selectedOne = this.selectedOneStore$.asObservable();
}
