import { BtnType } from "../models/filter";
import { filterState } from "../state/filterState";

export function addFilterHandler(content: string, feature: BtnType) {
  switch (feature) {
    case BtnType.role:
      filterState.setFilter({
        ...filterState.getFilter(),
        role: content,
      });
      break;
    case BtnType.level:
      filterState.setFilter({
        ...filterState.getFilter(),
        level: content,
      });
      break;
    case BtnType.languages:
      if (filterState.getFilter().languages.includes(content)) {
        filterState.setFilter(filterState.getFilter());
      } else {
        filterState.setFilter({
          ...filterState.getFilter(),
          languages: [...filterState.getFilter().languages, content],
        });
      }
      break;
    case BtnType.tools:
      if (filterState.getFilter().tools.includes(content)) {
        filterState.setFilter(filterState.getFilter());
      } else {
        filterState.setFilter({
          ...filterState.getFilter(),
          tools: [...filterState.getFilter().tools, content],
        });
      }
      break;
    default:
      throw new Error("Unexpected filter case...");
  }
}
