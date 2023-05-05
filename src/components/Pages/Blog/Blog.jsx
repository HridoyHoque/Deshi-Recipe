import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";


const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [17, 11],
  };

  return (
    <div>
      <div>
      <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
        {({ toPdf }) => (
          <button className="btn btn-success " onClick={toPdf}>
            <FaDownload className="inline-block mr-2 text-white"></FaDownload>{" "}
            Download Pdf
          </button>
        )}
      </ReactToPdf>
      </div>
      <div className='mb-7 mt-2'>
        <h6 className="text-center">Programming Hero Batch 7</h6>
        <h6 className="text-center"> Assignment 10</h6>
        <h6 className="text-center"> Student: Hridoy Hoque</h6>
      </div>

     <div ref={ref}>
     <div>
        <p className='text-danger'>Q1: Tell us the differences between uncontrolled and controlled
          components.</p>
        <p> Ans: Uncontrolled components are managed by the DOM, while
          controlled components are managed by React. Controlled components
          provide more control and can handle input validation and state
          changes.</p>
      </div>
      <div>
        <p className='text-danger'>Q2: How to validate React props using PropTypes?</p>
        <p>Ans: In React, developers can use the PropTypes library to
          validate the type and shape of props passed to a component. To use
          PropTypes, import the library at the top of the file, and then
          define the PropTypes for each prop passed to the component using
          the propTypes object.</p>
      </div>
      <div>
        <p className='text-danger'>Q3: Tell us the difference between nodejs and express js.</p>
        <p> Ans: Node.js is a JavaScript runtime environment that enables
          developers to run JavaScript on the server-side, while Express.js
          is a web application framework built on top of Node.js, providing
          additional features for building web applications..</p>
      </div>
      <div>
        <p className='text-danger'>Q4: What is a custom hook, and why will you create a custom hook??</p>
        <p> Ans: Custom hooks are reusable functions in React that allow
          developers to extract and share logic between components.
          Developers create custom hooks to reduce code duplication and
          improve code readability and maintainability.</p>
      </div>
     </div>
    </div>
  );
};

export default Blog;