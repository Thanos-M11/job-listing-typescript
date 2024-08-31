import { DATA } from "../data/data.js";
export class JobState {
    constructor(jobs) {
        this.jobs = [];
        this.listeners = [];
        this.jobs = jobs;
    }
    static getInstance(jobs) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new JobState(jobs);
        return this.instance;
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    notifyListener() {
        this.listeners.forEach((listenerFn) => listenerFn(this.jobs));
    }
    getJobs() {
        return this.jobs;
    }
    setJobs(jobs) {
        this.jobs = jobs;
        this.notifyListener();
    }
    getFilteredJobs(filter) {
        return this.jobs.filter((job) => {
            let isValid = true;
            if (filter.role) {
                isValid = isValid && filter.role === job.role;
            }
            if (filter.level) {
                isValid = isValid && filter.level === job.level;
            }
            if (filter.languages) {
                isValid =
                    isValid &&
                        filter.languages.every((language) => {
                            return job.languages.includes(language);
                        });
            }
            if (filter.tools) {
                isValid =
                    isValid &&
                        filter.tools.every((tool) => {
                            return job.tools.includes(tool);
                        });
            }
            return isValid;
        });
    }
}
export const jobState = JobState.getInstance(DATA);
//# sourceMappingURL=jobState.js.map