import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import InputBox from './inputBox'
import MessageList from './MessageList'
import RoomList from './RoomList'

class App extends Component {
  addRoom () {

  }
  removeRoom() {

  }
  getCurrentRoomName() {
    if (!this.props.currentRoom) return '无'
    const room = this.props.rooms.find(room => room.get('id') === this.props.currentRoom);
    return (room && romm.get) ? room.get('name') : room;
  }
  isOwner() {
    if (!this.props.username || !this.props.currentRoom) return false;
    const room = this.props.rooms.find(room => room.get('id') === this.props.currentRoom);
    if (!room) return false;
    return room.get('owner') === this.props.username;
  }
  getMessages() {
    return this.props.messages ? this.props.messages.get(this.props.currentRoom) : [];
  }
  sendMessage() {

  }
  render() {
    const {currentRoom, rooms, username} = this.props;
    return (
      <div className="flex-row">
        <nav id="chat-nav">
          <p>聊天室列表</p>
          <RoomList rooms={rooms}
            currentRoom={currentRoom}
            switchRoom={id=>{''}}
           />
           <button className="btn color-2"
             onClick={this.addRoom.bind(this)}>+创建聊天室
           </button>
         </nav>
         { !currentRoom ? <h2>请选择一个聊天室</h2> :
           <section id="chat-main" className="flex">
             <header className="flex-row">
               <h3>当前聊天室：{this.getCurrentRoomName()}</h3>
               <span className="flex"></span>
               {!this.isOwner() ? '':
                 <button onClick={this.removeRoom.bind(this)}
                 className="btn sm color-5">X删除该聊天室
                 </button>
               }
               <MessageList messages={this.getMessages()} username={username} />
               <InputBox sendMessage={this.sendMessage.bind(this)} />
             </header>
           </section>
         }
        </div>
    )
  }
}
import PureRenderMixin from 'react-addons-pure-render-mixin'
import reactMixin from 'react-mixin'
reactMixin.onClass(App, PureRenderMixin)
export default App
