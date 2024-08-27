import { Component } from "./Component.js";
import { JobState } from "../state/jobState.js";
import { JobItem } from "./JobItem.js";
import { FilterState } from "../state/filterState.js";

export class RenderJobList extends Component<HTMLDivElement, HTMLUListElement> {
  private jobs: JobState;
  private filter: FilterState;

  constructor(jobs: JobState, filter: FilterState) {
    super("temp-job-list", "app-jobs", true, "app-jobs-ul");
    this.jobs = jobs;
    this.filter = filter;
    this.filter.addListener(this.renderContent.bind(this));
    this.jobs.addListener(this.renderContent.bind(this));

    this.renderContent();
  }

  configureClonedElement() {
    this.cloneElement.id = "app-jobs-ul";
  }

  renderContent() {
    this.configureClonedElement();
    this.cloneElement.innerHTML = "";
    const filteredJobs = this.jobs.getFilteredJobs(this.filter.getFilter());
    filteredJobs.forEach((job) => new JobItem(job));
  }
}
