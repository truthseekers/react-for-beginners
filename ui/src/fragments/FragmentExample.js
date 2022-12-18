import { Fragment } from "react";
function FragmentExample() {
  return (
    <>
      <Fragment>
        <div>Hello</div>
        <div>
          If you need to return two sibling elements at the top level of a
          return you need to wrap them in "fragments" like you see here. Both
          the empty tags and the Fragment tags are fragments.
        </div>
      </Fragment>
    </>
  );
}

export default FragmentExample;
