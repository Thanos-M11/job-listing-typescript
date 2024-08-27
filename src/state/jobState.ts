import { DATA } from "../data/data.js";
import { Filter } from "../models/filter.js";
import { Job } from "../models/job.js";

type JobListener = (jobs: Job[]) => void;

export class JobState {
  private jobs: Job[] = [];
  private listeners: JobListener[] = [];

  private static instance: JobState;

  private constructor(jobs: Job[]) {
    this.jobs = jobs;
  }

  static getInstance(jobs: Job[]) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new JobState(jobs);
    return this.instance;
  }

  public addListener(listener: JobListener) {
    this.listeners.push(listener);
  }

  public notifyListener() {
    this.listeners.forEach((listenerFn) => listenerFn(this.jobs));
  }

  public getJobs(): Job[] {
    return this.jobs;
  }

  public setJobs(jobs: Job[]) {
    this.jobs = jobs;
    this.notifyListener();
  }

  public getFilteredJobs(filter: Filter): Job[] {
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
