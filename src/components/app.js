import React, { Component } from 'react'

import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'

class App extends Component {
  render() {
    console.log(this.props.yo)
    return (
      <div>
        <BookDetail />
        <BookList />
      </div>
    );
  }
}

export default App
