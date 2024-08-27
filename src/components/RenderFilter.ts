import { BtnType } from "../models/filter.js";
import { Component } from "./Component.js";
import { Button } from "./Button.js";
import { removeFilterHandler } from "../handlers/removeFilterHandler.js";
import { FilterState, filterState } from "../state/filterState.js";

export class RenderFilter extends Component<HTMLDivElement, HTMLElement> {
  private filter: FilterState;

  constructor(filter: FilterState) {
    super("temp-filter", "app-filter-bar", true);
    this.filter = filter;
    this.filter.addListener(this.renderContent.bind(this));

    this.renderContent();
  }

  configureClonedElement(): void {
    this.cloneElement.id = "section_filter-btn";
    !filterState.isEmpty() &&
      this.cloneElement.classList.remove("doNotDisplay");
    filterState.isEmpty() && this.cloneElement.classList.add("doNotDisplay");
  }

  renderContent(): void {
    this.configureClonedElement();
    this.cloneElement.innerHTML = "";
    const { role, level, languages, tools } = this.filter.getFilter();

    role &&
      new Button(
        "section_filter-btn",
        role,
        "filter-btn",
        removeFilterHandler,
        BtnType.role,
        true
      );

    level &&
      new Button(
        "section_filter-btn",
        level,
        "filter-btn",
        removeFilterHandler,
        BtnType.level,
        true
      );

    languages &&
      languages.forEach((language) => {
        new Button(
          "section_filter-btn",
          language,
          "filter-btn",
          removeFilterHandler,
          BtnType.languages,
          true
        );
      });

    tools &&
      tools.forEach((tool) => {
        new Button(
          "section_filter-btn",
          tool,
          "filter-btn",
          removeFilterHandler,
          BtnType.tools,
          true
        );
      });

    !filterState.isEmpty() &&
      new Button(
        "section_filter-btn",
        "Clear",
        "filter-clear",
        removeFilterHandler,
        BtnType.clear
      );
  }
}
