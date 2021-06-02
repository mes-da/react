//class based component
import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    contact: [
      { id: 1, name: "Ram", phone: 4465456, email: "ram@gmail.com" },
      { id: 2, name: "Hari", phone: 6532, email: "hari@gmail.com" },
      { id: 3, name: "Shyam", phone: 65645, email: "shyam@gmail.com" },
    ],
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Show
        </button>
        <Navbar title="Contact Management System" />
        {this.state.contact.map((contact) => (
          <Contact contact={contact} key={Contact.id} />
        ))}

        <Form />
      </div>
    );
  }
}

export default App;
