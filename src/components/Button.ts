import { BtnType } from "../models/filter.js";

type Handler = (content: string, feature: BtnType) => void;

export class Button<T extends HTMLElement> {
  private currentElement: HTMLButtonElement;
  private hostElement: T;
  private content: string;
  private className: string;
  private handlerFn: Handler;
  private feature: BtnType;
  private removeWrapper: boolean;

  constructor(
    hostId: string,
    content: string,
    className: string,
    handlerFn: Handler,
    feature: BtnType,
    removeWrapper: boolean = false
  ) {
    this.currentElement = document.createElement("button");
    this.hostElement = document.getElementById(hostId) as T;
    this.content = content;
    this.className = className;
    this.feature = feature;
    this.handlerFn = handlerFn;
    this.removeWrapper = removeWrapper;

    this.currentElement.addEventListener(
      "click",
      this.handlerFn.bind(this, this.content, this.feature)
    );

    this.configure();

    this.removeWrapper ? this.renderRemoveWrapper() : this.attach();
  }

  private renderRemoveWrapper() {
    // runs only if removeWrapper prop is true
    const section = document.createElement("section");
    section.classList.add("button-wrapper");
    section.appendChild(this.currentElement);
    this.currentElement.classList.remove(this.className);
    const image = document.createElement("img");
    image.setAttribute("src", "./images/icon-remove.svg");
    image.setAttribute("alt", "remove icon");
    image.addEventListener(
      "click",
      this.handlerFn.bind(this, this.content, this.feature)
    );
    section.appendChild(image);
    this.hostElement.appendChild(section);
  }

  private configure() {
    this.currentElement.classList.add(this.className);
    this.currentElement.textContent = this.content;
  }

  private attach() {
    this.hostElement.appendChild(this.currentElement);
  }
}
