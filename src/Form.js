import React from "react";
import FoodDrop from "./FoodDrop";
import NumberDrop from "./NumberDrop";
import { TextArea } from "semantic-ui-react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    textarea: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.change}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.change}
        />
        <br />
        <input
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.change}
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.change}
        />
        <br />
        <div>
          <FoodDrop />
        </div>
        <br />
        <div>
          <FoodDrop />
        </div>
        <br />
        <div>
          <FoodDrop />
        </div>
        <br />
        <div>
          <NumberDrop />
        </div>
        <br />
        <div>
          <NumberDrop />
        </div>
        <br />
        <div>
          <NumberDrop />
        </div>
        <br />
        <div />
        <br />
        <TextArea
          name="textarea"
          placeholder="Add details..."
          onChange={this.change}
          value={this.state.textarea}>
            {this.state.textarea}
        </TextArea>
      </form>
    );
  }
}
