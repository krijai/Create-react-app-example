import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    error: flase,
    loading: false
  }
  async componentDidMount() {
    try{
      const response = await axios.get('/healthcheck')
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
      // .then(response => {
      //   console.log(response.data)
      // })
  }
  render(){
    return(
      <div>Hello World.</div>
    )
  }
}

export default App