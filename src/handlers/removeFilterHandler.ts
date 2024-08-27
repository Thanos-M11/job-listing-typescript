import { BtnType } from "../models/filter";
import { filterState } from "../state/filterState";

export function removeFilterHandler(content: string, feature: BtnType) {
  switch (feature) {
    case BtnType.role:
      filterState.setFilter({
        ...filterState.getFilter(),
        role: "",
      });
      break;
    case BtnType.level:
      filterState.setFilter({
        ...filterState.getFilter(),
        level: "",
      });
      break;
    case BtnType.languages:
      filterState.setFilter({
        ...filterState.getFilter(),
        languages: [
          ...filterState
            .getFilter()
            .languages.filter((language) => language !== content),
        ],
      });

      break;
    case BtnType.tools:
      filterState.setFilter({
        ...filterState.getFilter(),
        tools: [
          ...filterState.getFilter().tools.filter((tool) => tool !== content),
        ],
      });
      break;

    case BtnType.clear:
      filterState.clearFilter();
      break;

    default:
      console.log("default");
  }
}
