import { addFilterHandler } from "../handlers/addFilterHandler.js";
import { BtnType } from "../models/filter.js";
import { Job } from "../models/job.js";
import { Button } from "./Button.js";
import { Component } from "./Component.js";

export class JobItem extends Component<HTMLUListElement, HTMLLIElement> {
  constructor(private job: Job) {
    super("temp-job-item", "app-jobs-ul", false, job.id.toString());

    this.configureClonedElement();
    this.renderContent();
  }

  configureClonedElement(): void {}

  renderContent(): void {
    const img = this.cloneElement.querySelector("img");
    img?.setAttribute("src", this.job.logo.replace("./images", "../../public"));
    img?.setAttribute("alt", "logo");

    this.setContent("company");
    this.setContent("position");
    this.setContent("postedAt");
    this.setContent("contract");
    this.setContent("location");

    this.job.new && this.removeInactiveClass("new");
    this.job.featured && this.removeInactiveClass("featured");

    const jobFilterArticle = this.cloneElement.querySelector(".job-filters");
    jobFilterArticle!.id = `jf-${this.job.id}`;

    new Button(
      jobFilterArticle!.id,
      this.job.role,
      "filter-btn",
      addFilterHandler,
      BtnType.role
    );

    new Button(
      jobFilterArticle!.id,
      this.job.level,
      "filter-btn",
      addFilterHandler,
      BtnType.level
    );

    this.job.languages.forEach((language) => {
      new Button(
        jobFilterArticle!.id,
        language,
        "filter-btn",
        addFilterHandler,
        BtnType.languages
      );
    });

    this.job.tools.forEach((tool) => {
      new Button(
        jobFilterArticle!.id,
        tool,
        "filter-btn",
        addFilterHandler,
        BtnType.tools
      );
    });
  }

  private removeInactiveClass(element: string) {
    const el = this.cloneElement.querySelector(`.${element}`);
    if (el) {
      el.classList.remove("inactive");
    }
  }

  private setContent(content: string) {
    const elContent = this.cloneElement.querySelector(`.${content}`);
    if (elContent) {
      elContent.textContent = this.job[content as keyof Job].toString();
    }
  }
}
