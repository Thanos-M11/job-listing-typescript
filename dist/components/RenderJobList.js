import { Component } from "./Component.js";
import { JobItem } from "./JobItem.js";
export class RenderJobList extends Component {
    constructor(jobs, filter) {
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
//# sourceMappingURL=RenderJobList.js.map