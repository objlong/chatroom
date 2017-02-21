import React from 'react'
import ReactDOM from 'react-dom'
import {fromJS,Map,List} from "immutable"
import {expect} from 'chai'

import InputBox from '../../src/client/components/inputBox.jsx'
import TestUtil, {
  Simulate,
  renderIntoDocument,
  isCompositeComponentWithType,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils'

describe('inputBox', () => {
  var message;
  function sendMessage(msg) {
    message = msg;
  }
  const instance = renderIntoDocument(
    <InputBox sendMessage={sendMessage} />
  )
  const $textarea = findRenderedDOMComponentWithTag(instance, 'textarea');
  expect($textarea).to.be.ok;
  $textarea.value = 'some message';
  const $form = findRenderedDOMComponentWithTag(instance, 'form');
  Simulate.submit($form);
  expect(message).to.be.equal('some message');
})
