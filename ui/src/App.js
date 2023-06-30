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
import FetchJsonString from "./FetchJsonString";
import AxiosSendArray from "./AxiosSendArray";
import AxiosSendString from "./AxiosSendString";
import FetchJsonStringAwait from "./FetchJsonStringAwait";
import AxiosJsonString from "./AxiosJsonString";
import AxiosJsonArray from "./AxiosJsonArray";
import FetchJsonArray from "./FetchJsonArray";
import FetchSendObj from "./FetchSendObj";
import FetchSendArray from "./FetchSendArray";
import FetchSendString from "./FetchSendString";

function App() {
  return (
    <div className="App">
      <h2>
        Visit App.js and uncomment the components to see what each one does.
        Every "lesson" is isolated into its own section
      </h2>
      <StateExample />
      {/* <PropsExample /> */}
      {/* <LiftStateEx /> */}
      {/* <FragmentExample /> */}
      {/* <ChildrenElementsEx /> */}
      {/* <ApiCall /> */}
      {/* <UseEffectExample /> */}
      {/* <CleanupHome /> */}
      {/* formSubmissionEx and Ex2 is "hooks" */}
      {/* <CustomHookBasics /> */}
      {/* <FormSubmissionEx /> */}
      {/* <FormSubmissionEx2 /> */}
      {/* <ReactQueryStuff /> */}
      {/* <RoutingStuff /> */}
      {/* <TestCreateElement /> */}
      {/* <FetchJsonString /> */}
      {/* <FetchJsonStringAwait /> */}
      {/* <FetchJsonArray /> */}
      {/* <AxiosSendArray /> */}
      {/* <AxiosSendString /> */}
      {/* <AxiosJsonString /> */}
      {/* <AxiosJsonArray /> */}
      {/* <FetchSendObj /> */}
      {/* <FetchSendArray /> */}
      {/* UNSOLVED BELOW */}
      {/* <FetchSendString /> */}
    </div>
  );
}

export default App;
