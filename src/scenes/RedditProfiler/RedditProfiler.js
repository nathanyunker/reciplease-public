import React from 'react';
//import { connect } from 'react-redux'
import { Button, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
//import { fetchFavorites } from '../../actions/index.js' // need to get favorites
 
// @connect((store) => {
//   return {
//     favorites: store.favorites.favorites
//   }
// })
class RedditProfiler extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      favorites: [{name: 'something'}, {name: 'something Else'}]
    };
  }

//   componentWillMount() {
//     if (this.props.match.params.id) {
//       this.props.dispatch(fetchFavorites('enter params here'));
//     }
//   }
 
  render() {
    return (
      <div className="container">
      <ListGroup>
            {
              this.state.favorites.map((favorite, idx) => {
                return(
                  <ListGroupItem key={"favorite"+idx}>
                      <div>{favorite.name}</div>
                  </ListGroupItem>
                )
              })
            } 
          </ListGroup>
      </div>
    );
  }
}
export default RedditProfiler;