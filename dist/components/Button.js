export class Button {
    constructor(hostId, content, className, handlerFn, feature, removeWrapper = false) {
        this.currentElement = document.createElement("button");
        this.hostElement = document.getElementById(hostId);
        this.content = content;
        this.className = className;
        this.feature = feature;
        this.handlerFn = handlerFn;
        this.removeWrapper = removeWrapper;
        this.currentElement.addEventListener("click", this.handlerFn.bind(this, this.content, this.feature));
        this.configure();
        this.removeWrapper ? this.renderRemoveWrapper() : this.attach();
    }
    renderRemoveWrapper() {
        const section = document.createElement("section");
        section.classList.add("button-wrapper");
        section.appendChild(this.currentElement);
        this.currentElement.classList.remove(this.className);
        const image = document.createElement("img");
        image.setAttribute("src", "./images/icon-remove.svg");
        image.setAttribute("alt", "remove icon");
        image.addEventListener("click", this.handlerFn.bind(this, this.content, this.feature));
        section.appendChild(image);
        this.hostElement.appendChild(section);
    }
    configure() {
        this.currentElement.classList.add(this.className);
        this.currentElement.textContent = this.content;
    }
    attach() {
        this.hostElement.appendChild(this.currentElement);
    }
}
//# sourceMappingURL=Button.js.map