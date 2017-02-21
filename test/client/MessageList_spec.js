import React from 'react'
import ReactDOM from 'react-dom'
import {fromJS,Map,List} from "immutable"
import {expect} from 'chai'

import MessageList from '../../src/client/components/MessageList.jsx'
import TestUtil, {
  Simulate,
  renderIntoDocument,
  isCompositeComponentWithType,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils'

describe('MessageList', () => {
  it ('render Message and my message', () => {
    const messages = fromJS([
      {user: 'objlong', content: 'some message', time: '23:33'},
      {user: 'objlong02', content: 'some more message', time: '12:33'}
    ]);
    const component = renderIntoDocument(
      <MessageList username="objlong02" messages={messages} />
    );
    const $messages = scryRenderedDOMComponentsWithTag(component, 'li');
    const $myMessages = scryRenderedDOMComponentsWithClass(component, 'message-self');
    expect($messages.length).to.be.equal(2);
    expect($myMessages.length).to.be.equal(1);
  })
});
