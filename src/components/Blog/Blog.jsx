import React from "react";

const Blog = () => {
  return (
    <div className="md:px-12 px-3 mt-10">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
        Differences between uncontrolled and controlled components.
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
        How to validate React props using PropTypes ?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} The props can be of any data type.The props should be an array,boolean,number,string,symbol.The props should be an instance of a particular JavaScript class.The props must be an element.The props must be provided.PropTypes  validate React props like this</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
        Difference between nodejs and express js.
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
        What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
