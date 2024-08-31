import { BtnType } from "../models/filter.js";
import { filterState } from "../state/filterState.js";
export function addFilterHandler(content, feature) {
    switch (feature) {
        case BtnType.role:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { role: content }));
            break;
        case BtnType.level:
            filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { level: content }));
            break;
        case BtnType.languages:
            if (filterState.getFilter().languages.includes(content)) {
                filterState.setFilter(filterState.getFilter());
            }
            else {
                filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { languages: [...filterState.getFilter().languages, content] }));
            }
            break;
        case BtnType.tools:
            if (filterState.getFilter().tools.includes(content)) {
                filterState.setFilter(filterState.getFilter());
            }
            else {
                filterState.setFilter(Object.assign(Object.assign({}, filterState.getFilter()), { tools: [...filterState.getFilter().tools, content] }));
            }
            break;
        default:
            throw new Error("Unexpected filter case...");
    }
}
//# sourceMappingURL=addFilterHandler.js.map