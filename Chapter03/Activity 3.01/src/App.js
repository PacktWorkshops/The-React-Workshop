import React, { Component } from 'react';
import './App.css';

const TILE_COUNT = 24;

class App extends Component {
  constructor(props) {
    super(props);

    // Our initial state should have a blank list of tiles, no previous flipped tile, and 
    this.state = {
      tiles: [],
      lastFlipped: null,
      clicks: 0
    };

    this.resetTiles = this.resetTiles.bind(this);
    this.flipTile = this.flipTile.bind(this);
  }
  flipAllBackOver(tiles) {
    // For each tile, we want to see if it is matched. If it isn't, we flip it back over.
    // Otherwise we leave it be.
    tiles.forEach(tile => {
      if (!tile.matched) {
        tile.flipped = true;
      }
    });
    return tiles;
  }
  flipTile(index) {
    // Create a temporary store for the tiles
    let tiles = this.state.tiles;
    // And grab the current tile we're working with
    let tile = tiles[index];
    // Increment the number of clicks
    let clicks = this.state.clicks + 1;
    // And set a temp for the last tile flipped index
    let lastFlipped = this.state.lastFlipped;

    if (lastFlipped === null) {
      // If lastFlipped is null, then we have no previous tile to match against
      tiles = this.flipAllBackOver(tiles);
      // So flip all of the tiles back over
      tile.flipped = !tile.flipped;
      // And then show only the clicked tile
      lastFlipped = index;
      // And set the lastFlipped to the current tile's index too
    } else {
      // Flip the current tile over
      tile.flipped = !tile.flipped;
      // Grab the last flipped tile using the index
      let lastFlippedTile = this.state.tiles[lastFlipped];
      if (lastFlippedTile.number === tile.number) {
        // The numbers match, so let's update the state of both tiles to matched: true!
        lastFlippedTile.matched = true;
        tile.matched = true;
        // And update the list of tiles we'll use later in setState
        tiles[lastFlipped] = lastFlippedTile;
      }
      // We've flipped two cards, so there is no more "previous" card to match against
      lastFlipped = null;
    }

    // And update the current tile
    tiles[index] = tile;

    // And set the state, updating the number of clicks, the state of all of the tiles, and the last flipped tile's index
    this.setState({ clicks, tiles, lastFlipped });
  }
  resetTiles() {
    // Start off with a blank tileset
    let tiles = [];
    // And start off with our numbering at 0
    let number = 0;
    // We're going to create two of the same tile for each number
    for (let i = 0; i < TILE_COUNT; i += 2) {
      number++;
      // Create two tiles
      let tileOne = { flipped: true, matched: false, number };
      let tileTwo = { flipped: true, matched: false, number };
      // And add those to the list of tiles
      tiles = [...tiles, tileOne, tileTwo];
    }
    // Then randomize the tiles!
    for (let i = 0; i < tiles.length; i++) {
      // For each tile, pick a random one to switch it with
      const swapWith = Math.floor(Math.random() * tiles.length);
      // Swap the two tiles in place
      [tiles[i], tiles[swapWith]] = [tiles[swapWith], tiles[i]];
    }
    // Then update the state so the game starts over
    this.setState({ clicks: 0, tiles });
  }
  renderTile(tile, index) {
    // This is a helper function to render a "tile"
    // So we'll start off with a default of "Tile" for the CSS class
    let classes = ["Tile"];
    // If the tile is flipped, it should have the "flipped" CSS class too
    if (tile.flipped) {
      classes = [...classes, "flipped"];
    }
    // If the tile has been matched previously, it should have the "matched" CSS class too
    if (tile.matched) {
      classes = [...classes, "matched"];
    }
    // We also need to remember to set a unique key for each item we add!
    let key = `tile-${index}`;
    // Classes in Javascript need to be separated with a space, not with commas
    // The onClick needs to be inlined because we need to pass the index as an argument to this.flipTile, not the event
    // And we should only show the number if the tile is not flipped over (no cheating!)
    return (
      <div key={key} className={classes.join(" ")} onClick={() => this.flipTile(index)}>
        {!tile.flipped && tile.number}
      </div>
    );
  }
  render() {
    // And finally, our render method. Nothing too terribly interesting here.
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <strong>Clicks: {this.state.clicks}</strong>
        <br />
        <button onClick={this.resetTiles} className="reset">New Game</button>
        <hr />
        {this.state.tiles.map((tile, index) => this.renderTile(tile, index))}
      </div>
    );
  }
}

export default App;