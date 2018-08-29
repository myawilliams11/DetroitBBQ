import React from 'react';
import FoodDrop from './FoodDrop';
import NumberDrop from './NumberDrop';
import TextArea from './TextArea';



class Order extends React.Component {
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
          </div>
          
          
        )}
}

export default Order;