import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class BookDetail extends React.Component{
  render(){
    if(!this.props.activeBook){
      return <div>Select a book</div>
    }
    return(
      <div>
        <h3>{this.props.activeBook.title}</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
