export class Component {
    constructor(templateId, hostElementId, insertAtStart, clonedElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.cloneElement = importedNode.firstElementChild;
        if (clonedElementId) {
            this.cloneElement.id = clonedElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.cloneElement);
    }
}
//# sourceMappingURL=Component.js.map