import React, { Component } from "react";
import "./App.css";

// Declara los datos diponibles dentro de la aplicacion 
var BEST_JS_LIBS = [
  { name: 'Backbone.js', url: 'http://backbonejs.org/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Underscore', url: 'http://underscorejs.org/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'}
];

class App extends Component {
  constructor(props) {
    super(props)
    // establece el state a el dato que vaya entrando desde el input
    this.state = { query: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });

    // Feel like debugging something?
    // Open DevTools and uncomment next line:

    // console.log(e); debugger;

    // Now type something into the input.
    // Nice, huh? Remove this line so we can move on.
  }

  render() {

    var libs = BEST_JS_LIBS,
    query = this.state.query.trim().toLowerCase();

    // For the next bits of fun, make sure you
    // have typed something into the input!

    if (query.length > 0) {
      libs = libs.filter(
        // Feeling lucky? Try swapping these lines:
        // () => Math.random() > 0.5
        lib => lib.name.toLowerCase().match(query)
      );
    }

    // You know what to do:
    // return <i>{libs.map(l => l.name).join(', ')} are friends!</i>;

    return (
      <div>
        <input type='text' // try 'date'
              //  value={this.state.query/*.toUpperCase()*/}
               onChange={this.handleChange}
               // onMouseEnter={() => this.setState({ query: 'react' })}
               placeholder='Type to search' />
        <ul>
          {libs.map(lib =>
            <li key={lib.name}>
              <a href={lib.url} target='_blank'>
              {
                // 'Such ' +
                lib.name
              }
              </a>
            </li>
          )}
        </ul>
        {
          // libs.length === 0 && <i>Empty!</i>
        }
      </div>
    );
  }
}

export default App;
