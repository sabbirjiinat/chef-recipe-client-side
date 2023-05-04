import React from "react";
import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="md:px-12 px-3 mt-10">
      <div className="bg-gray-300 rounded-sm p-10 my-6">
        <h1 className="text-4xl text-center font-semibold mb-3">
          Download pdf file information about blog page
        </h1>
        <div className="flex flex-col items-center ali">
          <Pdf targetRef={ref} filename="blog-information.pdf">
            {({ toPdf }) => (
              <button
                className="flex items-center duration-200 px-2 py-1 rounded-md gap-2 text-base font-semibold hover:text-white hover:bg-blue-500  bg-blue-400"
                onClick={toPdf}
              >
                <FaFilePdf></FaFilePdf>Generate Pdf
              </button>
            )}
          </Pdf>
          <div className="mt-3" ref={ref}>
            <h1 className="text-xl">Here is four question about react.</h1>
            <ul>
              <li>
                1. differences between uncontrolled and controlled components.
              </li>
              <li>2. How to validate React props using PropTypes</li>
              <li>3. difference between nodejs and express js.</li>
              <li>
                4. What is a custom hook, and why will you create a custom hook?
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-medium">
          Differences between uncontrolled and controlled components.
        </div>
        <div className="collapse-content">
          <p>
            In React, controlled components refer to components
            that have their state and behavior controlled by the parent
            component. These components rely on props passed down from the
            parent component to update their state and behavior. Uncontrolled
            components refer to components that manage their own state
            internally.
          </p>
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
          <p>
           The props can be of any data type.The props should be
            an array,boolean,number,string,symbol.The props should be an
            instance of a particular JavaScript class.The props must be an
            element.The props must be provided.PropTypes validate React props
            like this
          </p>
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
          <p>
            Express is a minimal and flexible node. js web
            application framework, providing a robust set of features for
            building single and multi-page, and hybrid web applications. On the
            other hand, Node. js is detailed as "A platform built on Chrome's
            JavaScript runtime for easily building fast, scalable network
            applications
          </p>
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
          <p>
            Custom React JS hooks are reusable functions that a
            React JS software developer can use to add special and unique
            functionality to the React applications. Usually, if there is a
            requirement to add a feature, one can install a third-party library
            and solve the problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
