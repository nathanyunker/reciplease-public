import React from 'react';
import { connect } from 'react-redux'
import { Button, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { fetchRedditFavorites } from '../../actions/index.js' // need to get favorites
 
@connect((store) => {
  return {
    favorites: store.redditFavorites
  }
})
class RedditProfiler extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      favorites: [{name: 'something'}, {name: 'something Else'}]
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchRedditFavorites('enter params here'));
  }
 
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
          <div>
              <span>Here are the favorites</span>
            {this.props.redditFavorites}
          </div>
      </div>
    );
  }
}
export default RedditProfiler;