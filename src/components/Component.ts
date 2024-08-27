export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  cloneElement: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    clonedElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.cloneElement = importedNode.firstElementChild as U;
    if (clonedElementId) {
      this.cloneElement.id = clonedElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.cloneElement
    );
  }

  abstract configureClonedElement(): void;
  abstract renderContent(): void;
}
