import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomePage extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  renderContent(maxItem = 9){
    if(!(this.props.items.length > 0)) {
      return <div>loading</div>
    }
    this.contentItems = [];
    let pageNumber = this.props.match.params.page || 1;
    for(let i = pageNumber; i <= pageNumber*maxItem; i++){
      this.contentItems.push(this.props.items[i-1]);
    }
    return this.contentItems.map(data => {
        return (
          <div class="card">
            <img class="card-img-top" src="{data.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )
    });
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items : state.getItems };
}

export default connect(mapStateToProps, actions)(HomePage);
