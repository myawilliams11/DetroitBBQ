import React from 'react';

export default class Form extends React.Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value })
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });
        this.props.onChange({
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });
        
    }

    render() {
        return (
        //     <Menu fixed='top' inverted>
        //     <Container>
        //       <Menu.Item as='a' header>
        //         <Image size='mini' src='detroitbbq/src/bigkenlogo.png' style={{ marginRight: '1.5em' }} />
        //         Big Ken's BBQ
        //       </Menu.Item>
        //       <Menu.Item as='a'>About</Menu.Item>
        //       <Menu.Item as='a'>Order</Menu.Item>
        //       <Menu.Item as='a'>Contact Us</Menu.Item>
        
        
        
        //     </Container>
        //   </Menu>

        <div>
            <h2>Contact Us!</h2>
            <form>
                <input 
                name='firstName'
                placeholder= 'First Name' 
                value={this.state.firstName} 
                onChange={e => this.change(e)} 
                />
                <br />
                <input 
                name='lastName'
                placeholder= 'Last Name' 
                value={this.state.lastName} 
                onChange={e => this.change(e)} 
                />
                <br />
                <input 
                name='email'
                placeholder= 'E-mail' 
                value={this.state.email} 
                onChange={e => this.change(e)} 
                />
                <br />
                <input 
                name='phone'
                placeholder= 'Phone' 
                value={this.state.phone} 
                onChange={e => this.change(e)} 
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            </div>
        );
    }
}