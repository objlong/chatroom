import {expect} from "chai"
import {v1} from "uuid"
import {fromJS,Map,List} from "immutable"
import {addRoom, removeRoom} from '../../src/server/core.js'

describe('rooms', ()=>{
  it('能够添加房间：addRoom', ()=>{
    var firstRoom = {name: 'first room', id:v1(), owner: 'objlong'}
    const nextState = addRoom(undefined, firstRoom)
    const rooms = nextState.get('rooms')
    expect(rooms).to.be.ok
    expect(rooms.get(0)).to.equal(Map(firstRoom))

    const nextNextState = addRoom(nextState, {
      name: 'second room', owner: 'objlong02'
    })
    expect(nextNextState.getIn(['rooms', 1, 'name'])).to.equal('second room')
  })

  const mockState = fromJS({
    rooms: [{name: 'first room', id: v1(), owner: 'objlong'}]
  })
  it('能被创建者删除', ()=>{
    const state = removeRoom(mockState, {
      id: mockState.getIn(['rooms', 0, 'id']),
      user: 'objlong'
    })
    expect(state.get('rooms').size).to.equal(0)
  })
  it('不能被其他人删除', ()=>{
    const state = removeRoom(mockState, {
      id: mockState.getIn(['rooms', 0, 'id']),
      user: 'objlong01'
    })
    expect(state.get('rooms').size).to.equal(1)
  })

})
