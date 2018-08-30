import React, { Component } from "react";
import "./App.css";
import Order from "./order";
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

    <Header
    
      as="h1"
      content="Big Ken's Detroit Style BBQ"
      inverted
      style={{ 
        borderRadius: "30px",
        backgroundColor: "black",
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Supplemental Text"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button                   
      href= "#Form"
      primary size="huge"
      style={{backgroundColor:"black", fontColor: "light grey"}}>
      Pre-Order 
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
                      id = "facebookIcon"
                      name = "Facebook"
                      href= "#Facebook"
                      active={this.state.activeItem === "Facebook"}
                      onClick={this.handleItemClick}
                    >
                    <div>
                      <img src = {Facebook} className = "facebookIcon"></img>
                    </div>
                    </Menu.Item>
                    <Menu.Item position ="right"
                      name = "Yelp"
                      href= "#Yelp"
                      active={this.state.activeItem === "Yelp"}
                      onClick={this.handleItemClick}
                      >
                    <div>
                      <img src = {Yelp} className = "yelpIcon"></img>
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
  state = {modalOpen: false}
  handleOpen = () => this.setState({modalOpen:true})
  handleClose = () => this.setState({modalOpen:false})

render() {
  return(
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
    <a name = "history" />
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>

            <Header as="h3" style={{ fontSize: "2em" }}>
              About Us
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Lorem ipsum dolor amet ennui butcher cold-pressed poke, shoreditch lomo gastropub. Lomo small batch locavore taiyaki etsy 90's letterpress hella. Drinking vinegar butcher XOXO pop-up live-edge irony vexillologist. Butcher fam schlitz lumbersexual, green juice street art air plant poke unicorn pork belly intelligentsia cliche iPhone. Tbh fingerstache direct trade health goth blog retro forage tacos taiyaki cliche next level disrupt roof party. Kinfolk trust fund messenger bag, paleo organic blue bottle adaptogen kale chips chia brunch ennui microdosing typewriter. 90's fam semiotics waistcoat cronut hoodie fanny pack organic selfies farm-to-table.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
            </p>

            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
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
          <Grid.Column style={{ paddingBottom: "3em", paddingTop: "3em", height: "600px", display:"flex", justifyContent: "center", contentAlign:"center"}}>
            <Header as="h3" style={{ fontSize: "2em", textAlign:"center"}}> 
            </Header>
             <p style={{position: "relative"}}>15260 8 Mile Road <br/>Detroit Michigan, 48205</p>
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
          Order
        </Header>
        <Order />
        <Modal open = {this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick = {this.handleOpen} size="large"> TheButton</Button>} basic size = "small">
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
    </Modal>

      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as="h4" inverted style={{textAlign:"center"}}>
                
                (313)505-0505  |  test@gmail.com  |  Facebook 
              </Header>
              <p style={{textAlign:"center"}}>
                Copyright © 2018 All Rights Reserved.
              </p>
              <p style={{textAlign:"center"}}>                
                SNM LLC 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
  )}};

export default HomepageLayout;