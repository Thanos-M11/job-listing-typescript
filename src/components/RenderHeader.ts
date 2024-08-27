import { Component } from "./Component.js";

export class RenderHeader extends Component<HTMLDivElement, HTMLElement> {
  constructor() {
    super("temp-header", "app-header", true);

    this.configureClonedElement();
    this.renderContent();
  }

  configureClonedElement(): void {}
  renderContent(): void {}
}
