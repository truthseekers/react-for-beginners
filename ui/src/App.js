import logo from "./logo.svg";
import "./App.css";
import StateExample from "./state/StateExample";
import PropsExample from "./props/PropsExample";
import LiftStateEx from "./liftingState/LiftStateEx";
import FragmentExample from "./fragments/FragmentExample";
import ChildrenElementsEx from "./childrenElements/ChildrenElementsEx";
import ApiCall from "./apicall/ApiCall";
import UseEffectExample from "./useEffectExample/UseEffectExample";
import CleanupHome from "./effectWithCleanup/CleanupHome";
import CustomHookBasics from "./customhooks/CustomHookBasics";
import FormSubmissionEx from "./formSubmission/FormSubmissionEx";
import FormSubmissionEx2 from "./formSubmission2/FormSubmissionEx2";
import ReactQueryStuff from "./reactQueryStuff/ReactQueryStuff";
import RoutingStuff from "./ReactRouterStuff/RoutingStuff";
import TestCreateElement from "./createElementStuff/TestCreateElement";

function App() {
  return (
    <div className="App">
      {/* <StateExample /> */}
      {/* <PropsExample /> */}
      {/* <LiftStateEx /> */}
      {/* <FragmentExample /> */}
      {/* <ChildrenElementsEx /> */}
      {/* <ApiCall /> */}
      {/* <UseEffectExample /> */}
      {/* <CleanupHome /> */}
      {/* formSubmissionEx and Ex2 is "hooks" */}
      <CustomHookBasics />
      {/* <FormSubmissionEx /> */}
      {/* <FormSubmissionEx2 /> */}
      {/* <ReactQueryStuff /> */}
      {/* <RoutingStuff /> */}
      {/* <TestCreateElement /> */}
    </div>
  );
}

export default App;
