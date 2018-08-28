import React, { Component } from "react";
import "./App.css";
import Order from "./order";
import History from "./history";
import Form from "./Form";
import Map from "./map";
import PropTypes from "prop-types";
import Ken from "./ken.png";
import Ribs from "./ribs.png";
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


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text >
  <a name = "App" />

    <Header
    
      as="h1"
      content="Big Ken's Detroit Style BBQ"
      inverted
      style={{ 
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

class MobileContainer extends Component {
  state = {
    renderPage: ""
  };
  onClick = pageName => e => {
    this.setState({
      renderPage: pageName
    });
  };

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
          
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
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
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "3em", paddingTop: "3em", height: "600px", display:"flex", justifyContent: "center", contentAlign:"center"}}>
            <Header as="h3" style={{ fontSize: "2em", textAlign:"center"}}> Find us
            <Map style={{position: "relative"}}></Map>
            </Header>
          </Grid.Column> 
          <Grid.Column style={{ paddingBottom: "3em", paddingTop: "3em", height: "600px", display:"flex", justifyContent: "center", contentAlign:"center"}}>
            <Header as="h3" style={{ fontSize: "2em", textAlign:"center"}}> Find us
            <Map style={{position: "relative"}}></Map>
            </Header>
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
        <Modal trigger={<Button as="a" size="large"> TheButton</Button>}basic size="small">
        <Modal.Content>
      <p style={{fontSize:"3em", textAlign:"center",pointerEvents: 'none'}}>
        Your order has been sent! 
        <br/> 
        Someone will contact you shortly! 
        <br/>
        <Button>Not Working Yet</Button>
      </p>
    </Modal.Content>
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
);

export default HomepageLayout;