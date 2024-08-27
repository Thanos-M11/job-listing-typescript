import { RenderHeader } from "./components/RenderHeader";
import { RenderFooter } from "./components/RenderFooter";
import { RenderJobList } from "./components/RenderJobList";
import { RenderFilter } from "./components/RenderFilter";
import { filterState } from "./state/filterState";
import { jobState } from "./state/jobState";

function App() {
  new RenderHeader();
  new RenderFilter(filterState);
  new RenderJobList(jobState, filterState);
  new RenderFooter();
}

App();
