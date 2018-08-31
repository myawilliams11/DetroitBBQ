import React, { Component } from "react";
import "./App.css";
import History from "./history";
import Form from "./Form";
import Map from "./map";
import PropTypes from "prop-types";
import Ken from "./ken.png";
import Ribs from "./ribs.png";
import Facebook from "./facebook-logo.png"
import Yelp from "./yelp-icon.png"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility, 
  Modal
} from "semantic-ui-react";


const HomepageHeading = ({ mobile }) => (
  <Container text >
  <a name = "App" />
    <div style={{borderwidth: "200px", borderHeight: "100px",
        backgroundColor: "black", opacity: "0.75"}}>
         <div className="headerStyle">
          <Header
              as="h1"
              content="Big Ken's BBQ"
              inverted
              style={{ 
                fontSize: mobile ? "2em" : "4em",
                opacity:"1",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: mobile ? "1.5em" : "3em"
              }}
          />
          </div>
          <Header
            as="h2"
            content="Food Stand and Catering Service"
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
              paddingBottom:"0.5em"
            }}
          />
          </div>
    <br/>
    <Button                   
      href= "#Form"
      primary size="huge"
      style={{backgroundColor:"black", fontColor: "light grey", opacity:"0.8"}}>
      Order now!
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {
    activeItem: "home"
  };
  onClick = pageName => e => {
    this.setState({
      renderPage: pageName
    });
  };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        <a name = "App" />
          <Segment
            className='headBanner'
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu className='menuBar'
              style={{ opacity:"0.75" }}
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  name="App"
                  href = "#App"
                  active={this.state.activeItem === "App"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  name="history"
                  href= "#history"
                  active={this.state.activeItem === "history"}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>
                <Menu.Item
                  name="map"
                  href= "#map"
                  active={this.state.activeItem === "map"}
                  onClick={this.handleItemClick}
                >
                  Find Us
                </Menu.Item>
                <Menu.Item
                  name="Form"
                  href= "#Form"
                  active={this.state.activeItem === "Form"}
                  onClick={this.handleItemClick}
                >
                  Order
                </Menu.Item>

                    <Menu.Item position ="right"
                      // id = "facebookIcon"
                      // name = "Facebook"
                      // href= "#Facebook"
                      // active={this.state.activeItem === "Facebook"}
                      // onClick={this.handleItemClick}
                    >
                    <div>
                      <a href="https://www.facebook.com/bigkensbarbeque/" target="_blank">
                        <img src = {Facebook} className = "facebookIcon"></img>
                      </a>
                    </div>
                    {/* </Menu.Item>
                    <Menu.Item position ="right" */}
                      {/* // name = "Yelp"
                      // href= "#Yelp"
                      // active={this.state.activeItem === "Yelp"}
                      // onClick={this.handleItemClick}
                      > */}
                    <div>
                      <a href="https://www.yelp.com/" target="_blank">
                        <img src = {Yelp} className = "yelpIcon"></img>
                      </a>
                    </div>
                    </Menu.Item>

                
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    {/* <MobileContainer>{children}</MobileContainer> */}
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class HomepageLayout extends Component{

  // adding modal to order form
  state = {
    modalOpen: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    textarea: ""
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOpen = () => this.setState({modalOpen:true})
  handleClose = () => this.setState({
    modalOpen:false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    textarea: ""
  })

render() {
  return(
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
    <a name = "history" />
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>

            <Header as="h3" style={{ fontSize: "  1.5em", textAlign:"center"}}>
              About Us
            </Header>
            <p style={{ fontSize: "1em" }}>
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque consequat orci id tincidunt. Nam consectetur rutrum tincidunt. Nunc in semper leo, sit amet maximus tellus. Sed ornare porttitor mauris ac dictum. Vestibulum quis dui quam. Cras feugiat et lectus in convallis. Morbi maximus elementum sodales. Cras et vulputate metus. Aenean efficitur magna elementum, tristique dui non, cursus enim. Ut scelerisque commodo nisl, sed molestie arcu mollis a. Pellentesque eu ultrices ligula. Nullam aliquet dolor accumsan purus ultricies rutrum.
            <p/>
            Suspendisse potenti. Donec non eros non lacus faucibus vehicula sed vitae eros. Nam lobortis faucibus est in pharetra. Nunc eu ultricies lectus. Curabitur ligula magna, gravida vitae velit sed, fringilla egestas risus. Cras consectetur hendrerit magna tempus venenatis. Maecenas dignissim, nisi id tempor aliquam, tortor nulla cursus nisi, sed auctor enim diam dignissim nulla. Vestibulum egestas magna dui, et tempus dui vestibulum sed. Pellentesque nec neque vitae sem convallis varius non sed nisl.
            <p/>
            <p/>f
            Donec pharetra malesuada tortor, non vestibulum orci tristique sed. Etiam auctor tincidunt libero, et sodales nisl dapibus sit amet. Nam eu lacus in metus tempus sollicitudin. Etiam in nisi a eros ultrices rhoncus et ac nulla. Vestibulum et ipsum sit amet enim pharetra bibendum at non turpis. Morbi pulvinar iaculis leo, sed ullamcorper erat posuere non. Integer et faucibus augue. Nam facilisis metus vel sagittis dapibus. Maecenas elit tellus, fermentum sit amet aliquet eget, pretium non odio. Sed enim velit, lobortis at purus in, porta bibendum ipsum. Aenean et magna tellus.
            </p>
            
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={Ken}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <a name = "map" />
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal"  verticalAlign="middle" >
        <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em", height: "600px", display:"flex", justifyContent: "center", contentAlign:"center"}}>
            <Header as="h3" style={{ fontSize: "1.5em", textAlign:"center"}}> 
              Hours of Operation 
            </Header>
            <Header style={{position: "relative", fontSize:"1.3em"}}>
             15260 Eight Mile Road <br/>
             Detroit Michigan, 48205
             </Header>
             <Container style={{height:"200px", width:"180px", textAlign:"left"}}>
             <p>
               <strong>Sunday:</strong> 11:00am - 9:00pm
               <br/>
               <strong>Monday:</strong>    Closed
               <br/>
               <strong>Tuesday:</strong> Catering Only
               <br/>
               <strong>Wednesday:</strong> Catering Only
               <br/>
               <strong>Thursday:</strong> 4:00pm - 9:00pm
               <br/>
               <strong>Friday:</strong> 11:00am - 9:00pm
               <br/>
               <strong>Saturday:</strong> 11:00am - 9:00pm
               <br/>
             </p>
             </Container>
             <Header style={{position: "relative", fontSize:"1.3em"}}>
             23230 Wrexford Drive <br/>
             Southfield Michigan, 48033
             </Header>
             <Container style={{height:"200px", width:"180px", textAlign:"left"}}>
             <p>
               <strong>Sunday:</strong> 11:00am - 9:00pm
               <br/>
               <strong>Monday:</strong>    Closed
               <br/>
               <strong>Tuesday:</strong> Catering Only
               <br/>
               <strong>Wednesday:</strong> Catering Only
               <br/>
               <strong>Thursday:</strong> Catering Only
               <br/>
               <strong>Friday:</strong> 11:00am - 9:00pm
               <br/>
               <strong>Saturday:</strong> 11:00am - 9:00pm
               <br/>
             </p>
             </Container>
          </Grid.Column> 
          <Grid.Column style={{ padding:0, height: "100%"}}>
            <Map className="theActualMap"></Map>
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </Segment>

      <a name = "Form" />
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Pre-Order
        </Header>
          <Form
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            textarea={this.state.textarea}
            change={this.change}
            />
        
        <Modal open = {this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick = {this.handleOpen} size="large"> Submit</Button>} basic size = "small">
        <Modal.Content>
      <p style={{fontSize:"3em", textAlign:"center"}}>
        Your order has been sent! 
        <br/> 
        Someone will contact you shortly! 
        <br/>
      </p>
    </Modal.Content>
    <Modal.Actions style={{fontSize:"1em", display: "flex", justifyContent:"center"}}>
        <Button className="orderButton" onClick={this.handleClose} inverted >return</Button>
        </Modal.Actions>
    </Modal>

      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as="h4" inverted style={{textAlign:"center"}}>
                
                (313)505-0505  |  test@gmail.com 
              </Header>
              <p style={{textAlign:"center"}}>
              SNM LLC <br/>

                Copyright © 2018 All Rights Reserved.
              </p>

              <p style={{textAlign:"center"}}>
                WillPower Solutions LLC 
                </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
  )}};

export default HomepageLayout;