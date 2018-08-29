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
    fields: {}
  };
  change = e => {
    this.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
    this.onChange({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
  };
  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={e => this.change(e)}
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
        <TextArea />
      </form>
    );
  }
}
