import React, { Component } from "react";
import sprite from "../icons/sprite.svg";

class NotFoundPage extends Component {
  //   componentDidMount() {
  //   this.props.history.push({
  //     pathname: "/",
  //     state: {
  //       from: this.props.location.pathname,
  //     },
  //   });
  // }

  render() {
    return (
      <>
        <div className="section">
          <div className="NotFoundPage__wrapper">
            <svg className="NotFoundPage__icon">
              <use href={sprite + "#icon-warning"}></use>
            </svg>
            <h1>404 - page not found</h1>
          </div>
        </div>
      </>
    );
  }
}

export default NotFoundPage;

//не отправлять на pageNot редирект на home
