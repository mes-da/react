import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowing: false,
    };
  }
  handleShowHide = () => {
    //this.state.isShowing = true;
    this.setState({ isShowing: !this.state.isShowing });
  };
  render() {
    let cls = this.state.isShowing
      ? "fas fa-sort-up mr-1"
      : "fas fa-sort-down mr-1";
    return (
      <div>
        <div className="card w-50 mt-5 mx-auto">
          <div
            className="card-header"
            style={{
              backgroundColor: "blue",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <h1>
              <i className={cls} onClick={this.handleShowHide}></i>{" "}
              {this.props.contact.name}
              <div className="float-right">
                <i className="far fa-trash-alt mr-3"></i>
                <i className="far fa-edit"></i>
              </div>
            </h1>
          </div>
          {this.state.isShowing ? (
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{this.props.contact.email}</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Contact;
