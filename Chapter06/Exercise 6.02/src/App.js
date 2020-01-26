import React, { Component } from "react";
// styles
import "./App.css";
// component
import { Modal } from "./Components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <p>
            Crema caffeine, single origin variety coffee a qui turkish. Wings
            strong siphon extra percolator sweet single origin percolator.
            Redeye aftertaste strong single shot organic redeye brewed
            kopi-luwak caffeine variety. Aftertaste, arabica crema to go
            trifecta that grinder.
          </p>
          <p>
            Flavour saucer, con panna sit wings macchiato dripper sugar qui
            lungo turkish dripper. Acerbic blue mountain milk ristretto crema,
            rich barista ut and cappuccino filter. Saucer dark cappuccino,
            froth, extraction coffee crema white half and half single shot to
            go. Flavour cup robust cream eu café au lait extraction con panna
            trifecta body blue mountain decaffeinated.
          </p>
          <p>
            Eu shop, mocha body cortado pumpkin spice galão. Java affogato
            ristretto, dark flavour qui est white grounds a black. Cultivar
            siphon flavour, extra organic grinder kopi-luwak acerbic java
            organic. To go, et trifecta irish percolator cream est ut single
            origin mocha.
          </p>
          <p>
            Qui beans, caffeine skinny bar seasonal mazagran. Turkish spoon
            beans rich arabica medium kopi-luwak turkish. A, con panna blue
            mountain aftertaste steamed, so irish crema caffeine rich.
            Aftertaste eu aftertaste foam, con panna and rich robust and aroma
            arabica.
          </p>
        </div>
        <button onClick={this.toggleModal}>Show Modal</button>
        <Modal showModal={this.state.showModal} toggleModal={this.toggleModal}>
          Text in overlay
        </Modal>
      </div>
    );
  }
}

export default App;
