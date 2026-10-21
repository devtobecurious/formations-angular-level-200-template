import { Service, signal } from "@angular/core";

@Service()
export  class SearchStore {
  private readonly state = signal<string>('');

  dispatch(value: string): void {
    this.state.set(value);
  }

  get asReadonly() {
    return this.state.asReadonly();
  }
}
