import {expect} from "chai"
import {v1} from "uuid"
import {fromJS,Map,List} from "immutable"

import coreReducer from '../../src/server/reducer'
import {addRoom, removeRoom} from '../../src/server/actionCreater'

describe('server端核心Reducer', ()=>{
  it('可以成为reducer', ()=>{
    var id = v1()
    var actions = [
      {type: 'ADD_ROOM', room: {id, name: '1', owner: 'objlong'}},
      {type: 'ADD_ROOM', room: {name: '2', owner: 'objlong02'}},
      {type: 'ADD_ROOM', room: {name: '3', owner: 'objlong03'}},
      {type: 'REMOVE_ROOM', payload: {id: id, user: 'objlong'}}
    ]
    const finalState = actions.reduce(coreReducer, undefined)
    expect(finalState.get('rooms').size).to.equal(2)
    expect(finalState.getIn(['rooms', 0, 'owner'])).to.equal('objlong02')
  })
  it('使用actionCreater', ()=>{
    var id = v1()
    var action = [
      addRoom({id, name: '1', owner: 'objlong'}),
      addRoom({name: '2', owner: 'objlong02'}),
      addRoom({name: '3', owner: 'objlong03'}),
      removeRoom({id: id, user: 'objlong'})
    ]
    const finalState = action.reduce(coreReducer, undefined)
    expect(finalState.get('rooms').size).to.equal(2)
    expect(finalState.getIn(['rooms', 0, 'owner'])).to.equal('objlong02')
  })
})
