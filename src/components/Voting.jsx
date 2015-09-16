import React from 'react/addons';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting {
  render() {
    return (<div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote ref="vote" {...this.props} />
      }
    </div>);
  }
};
