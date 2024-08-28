import { Component } from "./Component.js";

export class RenderFooter extends Component<HTMLDivElement, HTMLElement> {
  constructor() {
    super("temp-footer", "app-footer", false);

    this.configureClonedElement();
    this.renderContent();
  }

  configureClonedElement(): void {
    this.cloneElement.classList.add("attribution");
    this.cloneElement.children[0].setAttribute(
      "href",
      "https://www.frontendmentor.io/challenges/"
    );
    this.cloneElement.children[1].setAttribute(
      "href",
      "https://thanosdev.netlify.app/homepage"
    );
    this.cloneElement.children[1].textContent = "Thanos Kalaitzis";
  }

  renderContent(): void {}
}