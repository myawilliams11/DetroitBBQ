import React from "react";
import FoodDrop from "./FoodDrop";
import NumberDrop from "./NumberDrop";
import { TextArea } from "semantic-ui-react";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.props.firstName}
          onChange={this.props.change}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.props.lastName}
          onChange={this.props.change}
        />
        <br />
        <input
          name="email"
          placeholder="E-mail"
          value={this.props.email}
          onChange={this.props.change}
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={this.props.phone}
          onChange={this.props.change}
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
          onChange={this.props.change}
          placeholder="Comments or concerns..."
          value={this.props.textarea}
        >
          {this.props.textarea}
        </TextArea>
      </form>
    );
  }
}
