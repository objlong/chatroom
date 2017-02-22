import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import {socket} from './io'

socket.on('state', (state) => {
  console.log('NOW State:', state);
});

import {fromJS, Map, List} from 'immutable'

const fakeState = {
  rooms: fromJS([
    {id: '0', name: 'room', owner: 'objlong'},
    {id: '1', name: 'room2', owner: 'objlong2'}
  ]),
  currentRoom: '1',
  username: 'objlong',
  message: fromJS({
    '1': [
      {user: 'objlong', content: 'message1', time: '22:22'},
      {user: 'objlong2', content: 'message2', time: '22:23'}
    ]
  })
}
var $app = document.getElementById('app');
function render() {
  ReactDOM.render(
    <App rooms={fakeState.rooms}
      message={fakeState.messages}
      currentRoom={fakeState.currentRoom}
      username={fakeState.username}
    />,
    $app
  )
}
