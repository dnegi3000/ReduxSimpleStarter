import React, { Component } from 'react';
import MegaMenu from './megamenu';
import Country from './country';
 class App extends Component {
  render() {
    return (
    	<div>
        /*<Country name="Country Comp"/>**/
          <MegaMenu name="MegaMenu"/>
      </div>
    );
  }
}
export default App;
