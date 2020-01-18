import React, { Component } from "react";
// styles
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  state = {
    theme: "light"
  };
  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme });
  }
  render() {
    return (
      <div className={`${this.state.theme}-theme`}>
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <button
                className="btn btn-primary btn-lg"
                onClick={this.toggleTheme}
              >
                Switch Theme
              </button>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>State example</h2>
              <p className="lead">
                Adipisci architecto blanditiis cumque dolores doloribus dolorum
                eligendi ex nesciunt quisquam. Assumenda, dolorem enim eos est
                illum ipsa odit rem tenetur. Blanditiis!
              </p>
              <p>
                Adipisci aut dolore doloribus dolorum eius enim exercitationem
                facere iusto, nesciunt nostrum porro, quidem suscipit velit.
                Beatae blanditiis cum id quaerat quisquam.
              </p>
              <p>
                Accusantium ad, animi blanditiis dignissimos eius enim est fugit
                minima molestiae necessitatibus nostrum odio quae quaerat quidem
                quos rerum sint ullam voluptatibus.
              </p>
              <p>
                Beatae eius numquam pariatur ratione sapiente velit! Accusantium
                adipisci aut est hic illum, maxime molestias odit optio
                reiciendis sint tenetur, ut veritatis!
              </p>
              <ul>
                <li>
                  Aliquam amet eum exercitationem facere illo, illum ipsam
                  laboriosam modi nihil obcaecati odit optio provident, quae
                  quas quia quibusdam ratione totam veniam!
                </li>
                <li>
                  Asperiores, debitis eius harum, id incidunt natus quisquam
                  quos repellat tempore ut veniam voluptas. Adipisci aliquam
                  deleniti ea iusto quasi totam voluptatum!
                </li>
                <li>
                  Ad cupiditate, eos hic obcaecati voluptas voluptatibus!
                  Accusamus eaque laudantium modi quae repellat reprehenderit,
                  vel! Culpa doloremque eligendi excepturi minima nam sed!
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <todo-component></todo-component>
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <hr />
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <hr />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
          <hr />
          <footer>
            <p>&copy; 2016 Company, Inc.</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
