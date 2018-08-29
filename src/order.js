import React from 'react';
import FoodDrop from './FoodDrop';
import NumberDrop from './NumberDrop';
import TextArea from './TextArea';
// import {
//   Modal,
//   Button
// } from "semantic-ui-react";



class Order extends React.Component {
  // state = {modalOpen: false}
  // handleOpen = () => this.setState({modalOpen:true})
  // handleClose = () => this.setState({modalOpen:false})


    render(){

      
        return (<div>
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
          <div>
          </div>
          <br />
          <TextArea />
         {/* <Modal open = {this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick = {this.handleOpen} size="large"> TheButton</Button>} basic size = "small">
       <Modal.Content>
     <p style={{fontSize:"3em", textAlign:"center"}}>
       Your order has been sent! 
       <br/> 
       Someone will contact you shortly! 
       <br/>
     </p>
   </Modal.Content>
   <Modal.Actions style={{fontSize:"1em", display: "flex", justifyContent:"center"}}>
       <Button className="orderButton" onClick={this.handleClose} inverted >Button don't work</Button>
       </Modal.Actions>
   </Modal> */}
          </div>
         
        )}
}

export default Order;