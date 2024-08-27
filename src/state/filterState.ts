import { Filter } from "../models/filter.js";

type FilterListener = (filter: Filter) => void;

export class FilterState {
  private listeners: FilterListener[] = [];
  private initialState: Filter = {
    role: "",
    level: "",
    languages: [],
    tools: [],
  };

  private filter: Filter = this.initialState;
  private static instance: FilterState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new FilterState();
    return this.instance;
  }

  public addListener(listener: FilterListener) {
    this.listeners.push(listener);
  }

  public notifyListeners() {
    this.listeners.forEach((listener) => listener(this.filter));
  }

  public getFilter(): Filter {
    return this.filter;
  }

  public setFilter(filter: Filter): void {
    this.filter = { ...this.filter, ...filter };
    this.notifyListeners();
  }

  public clearFilter(): void {
    this.filter = this.initialState;
    this.notifyListeners();
  }

  public isEmpty(): boolean {
    if (Object.keys(this.filter).length === 0) {
      return true;
    } else {
      return (
        Object.values(this.filter).reduce((acc, cur) => acc + cur.length, 0) ===
        0
      );
    }
  }
}

export const filterState = FilterState.getInstance();
