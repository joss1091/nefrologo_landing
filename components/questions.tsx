import React, { useEffect } from "react";
import $ from "jquery";

export default function Questions({ questions }) {
  useEffect(() => {
    $(".accordion__header").on("click", function () {
      $(this).parent(".accordion-item").toggleClass("opened");
      $(this).parent(".accordion-item").siblings().removeClass("opened");
    });
    $(".accordion__title").on("click", function (e) {
      e.preventDefault();
    });
  }, []);
  return (
    <div className="col-sm-12 col-md-12 col-lg-8" id="accordion">
      {questions.map(({ question, answer }, index) => (
        <div
          className={`accordion-item ${index == 0 ? "opened" : ""}`}
          key={index}
        >
          <div
            className="accordion__header"
            data-toggle="collapse"
            data-target={`#collapse${index}`}
          >
            <a className="accordion__title" href="#">
              {question}
            </a>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index == 0 ? "show" : ""}`}
            data-parent="#accordion"
          >
            <div className="accordion__body">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
