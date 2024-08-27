import { RenderHeader } from "./components/RenderHeader.js";
import { RenderFooter } from "./components/RenderFooter.js";
import { JobList } from "./components/RenderJobList.js";
import { RenderFilter } from "./components/RenderFilter.js";
import { filterState } from "./state/filterState.js";
import { DATA } from "./data/data.js";
import { jobState } from "./state/jobState.js";

function App() {
  new RenderHeader();
  new RenderFilter(filterState);
  new JobList(jobState, filterState);
  new RenderFooter();
}

App();
