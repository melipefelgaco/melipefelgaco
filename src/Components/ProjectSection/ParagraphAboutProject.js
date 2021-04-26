import React from "react";

const ParagraphAboutProject = () => {
  return (
    <div>
      <p>
        Currency Converter was a project that initially started with vanilla
        JS and CSS using Bootstrap. Only later it was remade in React. The
        calculation when it was first deployed used to be based on an API that
        later changed to a model that required the user to pay for a
        key to exchange the
        currency. So I made the change to what is now the current working API.
        The current API happens to sometimes go down but hey, at least it's
        free.It was a very fun project to make, and it was my first deployed
        project. Currently it converts between
        the following currencies: BRL, USD and EUR.
      </p>
    </div>
  );
};

export default ParagraphAboutProject;
