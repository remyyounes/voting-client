import React from 'react/addons';
import Winner from './Winner';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (<div className="voting">
      {this.getPair().map((entry) => {
        return (
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {
              this.hasVotedFor(entry) ?
                <div className="label">Voted</div> :
                null
            }
          </button>
        );
      })}
    </div>);
  }
};
