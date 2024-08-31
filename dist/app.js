import { RenderHeader } from "./components/RenderHeader.js";
import { RenderFooter } from "./components/RenderFooter.js";
import { RenderJobList } from "./components/RenderJobList.js";
import { RenderFilter } from "./components/RenderFilter.js";
import { filterState } from "./state/filterState.js";
import { jobState } from "./state/jobState.js";
function App() {
    new RenderHeader();
    new RenderFilter(filterState);
    new RenderJobList(jobState, filterState);
    new RenderFooter();
}
App();
//# sourceMappingURL=app.js.map