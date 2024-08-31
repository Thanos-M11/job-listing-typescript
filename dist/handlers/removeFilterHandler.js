import { BtnType } from "../models/filter.js";
import { filterState } from "../state/filterState.js";
export function removeFilterHandler(content, feature) {
    switch (feature) {
        case BtnType.role:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { role: "" }));
            break;
        case BtnType.level:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { level: "" }));
            break;
        case BtnType.languages:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { languages: [
                    ...filterState
                        .getFilter()
                        .languages.filter((language) => language !== content),
                ] }));
            break;
        case BtnType.tools:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { tools: [
                    ...filterState.getFilter().tools.filter((tool) => tool !== content),
                ] }));
            break;
        case BtnType.clear:
            filterState.clearFilter();
            break;
        default:
            console.log("default");
    }
}
//# sourceMappingURL=removeFilterHandler.js.map