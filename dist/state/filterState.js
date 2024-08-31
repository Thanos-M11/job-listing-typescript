export class FilterState {
    constructor() {
        this.listeners = [];
        this.initialState = {
            role: "",
            level: "",
            languages: [],
            tools: [],
        };
        this.filter = this.initialState;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new FilterState();
        return this.instance;
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    notifyListeners() {
        this.listeners.forEach((listener) => listener(this.filter));
    }
    getFilter() {
        return this.filter;
    }
    setFilter(filter) {
        this.filter = Object.assign(Object.assign({}, this.filter), filter);
        this.notifyListeners();
    }
    clearFilter() {
        this.filter = this.initialState;
        this.notifyListeners();
    }
    isEmpty() {
        if (Object.keys(this.filter).length === 0) {
            return true;
        }
        else {
            return (Object.values(this.filter).reduce((acc, cur) => acc + cur.length, 0) ===
                0);
        }
    }
}
export const filterState = FilterState.getInstance();
//# sourceMappingURL=filterState.js.map