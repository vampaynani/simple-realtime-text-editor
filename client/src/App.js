import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import { TYPE_CODE } from './Mutations';
import { READ_CODE } from './Queries';
import { TYPING_CODE_SUBSCRIPTION } from './Subscriptions';

class App extends Component {
  updateCode(e, typeCodeMutation){
    const newCode = e.currentTarget.value;
    typeCodeMutation({variables: {body: newCode}});
  }
  subscribeToNewCode(subscribeToMore){
    subscribeToMore({
      document: TYPING_CODE_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        if(!subscriptionData.data) return prev;
        return Object.assign({}, prev, {
          readCode: subscriptionData.data.typingCode
        });
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jeff's Editor</h1>
        </header>
        <main>
          <Query query={READ_CODE}>
            {({loading, error, data, subscribeToMore}) => {
              this.subscribeToNewCode(subscribeToMore);
              if(loading) return <div>Typing...</div>
              if(error) return <div>{error.message}</div>
              return <Mutation mutation={TYPE_CODE}>
                {typeCodeMutation => <textarea value={data.readCode.body} onChange={e => this.updateCode(e, typeCodeMutation)} />}
              </Mutation>
            }}
          </Query>
        </main>
      </div>
    );
  }
}

export default App;
