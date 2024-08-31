import { addFilterHandler } from "../handlers/addFilterHandler.js";
import { BtnType } from "../models/filter.js";
import { Button } from "./Button.js";
import { Component } from "./Component.js";
export class JobItem extends Component {
    constructor(job) {
        super("temp-job-item", "app-jobs-ul", false, job.id.toString());
        this.job = job;
        this.configureClonedElement();
        this.renderContent();
    }
    configureClonedElement() { }
    renderContent() {
        const img = this.cloneElement.querySelector("img");
        img === null || img === void 0 ? void 0 : img.setAttribute("src", this.job.logo);
        img === null || img === void 0 ? void 0 : img.setAttribute("alt", "logo");
        this.setContent("company");
        this.setContent("position");
        this.setContent("postedAt");
        this.setContent("contract");
        this.setContent("location");
        this.job.new && this.removeInactiveClass("new");
        this.job.featured && this.removeInactiveClass("featured");
        if (this.job.new && this.job.featured) {
            this.cloneElement.classList.add("border-left");
        }
        const jobFilterArticle = this.cloneElement.querySelector(".job-filters");
        jobFilterArticle.id = `jf-${this.job.id}`;
        new Button(jobFilterArticle.id, this.job.role, "filter-btn", addFilterHandler, BtnType.role);
        new Button(jobFilterArticle.id, this.job.level, "filter-btn", addFilterHandler, BtnType.level);
        this.job.languages.forEach((language) => {
            new Button(jobFilterArticle.id, language, "filter-btn", addFilterHandler, BtnType.languages);
        });
        this.job.tools.forEach((tool) => {
            new Button(jobFilterArticle.id, tool, "filter-btn", addFilterHandler, BtnType.tools);
        });
    }
    removeInactiveClass(element) {
        const el = this.cloneElement.querySelector(`.${element}`);
        if (el) {
            el.classList.remove("inactive");
        }
    }
    setContent(content) {
        const elContent = this.cloneElement.querySelector(`.${content}`);
        if (elContent) {
            elContent.textContent = this.job[content].toString();
        }
    }
}
//# sourceMappingURL=JobItem.js.map