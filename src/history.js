import React from 'react';
import App from './App.css'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const History = () => (
  <div>

  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src='detroitbbq/src/bigkenlogo.png' style={{ marginRight: '1.5em' }} />
        Big Ken's BBQ
      </Menu.Item>
      <Menu.Item as='a'>About</Menu.Item>
      <Menu.Item as='a'>Order</Menu.Item>
      <Menu.Item as='a'>Contact Us</Menu.Item>



    </Container>
  </Menu>

  <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>About Big Ken's BBQ</Header>
    <p>Add some attention-grabbing text here</p>


<p>
Lorem ipsum dolor amet cold-pressed fingerstache yuccie shaman affogato. Activated charcoal heirloom man braid lo-fi. Forage banh mi chartreuse biodiesel hashtag kombucha franzen vexillologist, pickled helvetica banjo jianbing. Chia raw denim letterpress glossier gochujang photo booth beard trust fund iPhone 3 wolf moon pickled meh. Pour-over plaid artisan waistcoat cloud bread.

Coloring book ethical try-hard, bushwick tousled williamsburg butcher la croix cloud bread chia. Chia pour-over before they sold out chartreuse, deep v poke vaporware narwhal blue bottle bushwick wolf. Adaptogen chia prism, cornhole selvage single-origin coffee narwhal kombucha shoreditch pickled. Vape church-key four dollar toast, PBR&B +1 live-edge fingerstache pork belly street art quinoa sartorial blog williamsburg flannel. Fam la croix narwhal four dollar toast, food truck tacos pabst echo park beard bespoke shabby chic.

Letterpress knausgaard iPhone, tumblr crucifix XOXO craft beer fanny pack readymade keytar banh mi pickled. Enamel pin fanny pack raw denim forage. Health goth small batch YOLO, hella mustache wayfarers poke salvia air plant XOXO marfa pok pok cliche locavore intelligentsia. Forage keffiyeh distillery hella. Brooklyn prism before they sold out waistcoat mlkshk direct trade. Chia twee cliche snackwave cronut, tacos vape schlitz subway tile. Gluten-free sriracha live-edge, shabby chic art party kombucha hashtag blue bottle kale chips green juice.

Scenester deep v synth gastropub 3 wolf moon. Cornhole messenger bag cred salvia drinking vinegar DIY godard try-hard unicorn single-origin coffee put a bird on it meggings +1 lo-fi. Blue bottle artisan activated charcoal coloring book, semiotics vape umami. Brunch neutra vape direct trade schlitz letterpress.

Artisan twee disrupt, gastropub prism hashtag vinyl tousled heirloom tofu beard pour-over. Tofu tattooed brunch, enamel pin wayfarers copper mug selfies freegan lumbersexual austin pabst four loko. Craft beer pickled disrupt kinfolk literally single-origin coffee. Shoreditch offal lomo, subway tile meh vice tattooed woke trust fund single-origin coffee williamsburg freegan you probably haven't heard of them meditation.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
</p>
  </Container>

  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={18}>
            {/* <Header inverted as='h4' content='Group 1' /> */}
            <List link inverted>
              <List.Item as='a'> (313)555-5555</List.Item>
              <List.Item as='a'>email@test.com</List.Item>
              <List.Item as='a'>Facebook</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row> 
      </Grid>
    </Container>
  </Segment>
</div>
)

export default History;