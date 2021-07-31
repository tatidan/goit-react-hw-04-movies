import React from "react";
import { Link, withRouter } from "react-router-dom";

const GoBackButton = ({ location, history }) => {
  return (
    <>
      <Link
        to={{
          pathname: "/movies",
          state: { from: location.pathname },
        }}
        className="goBackBtn"
      >
        Back to movies
      </Link>
    </>
  );
};

export default withRouter(GoBackButton);

// history.push(path [, state]) - добавляет новую запись на стек записей истории.
// history.replace(path [, state]) - подменяет текущую запись на новую на стеке записей истории.
