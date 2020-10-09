import React, { useState , useEffect} from 'react';
import './App.css';
import { FormControl,Input } from '@material-ui/core';
import Message from "./Message.js";
import db from './firebase.js';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
const [input , setInput] = useState('');
const [messages ,setMessages] = useState([]);
const [username , setUsername] = useState("");

useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id:doc.id ,message:doc.data()})))

    })
},[])

useEffect(() => {
  setUsername(prompt('Please enter your name'));
},[])


const sendMessage = async (event) => {
  event.preventDefault();

    const inst =await  db.collection('messages').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log("+++++++++++++++++++")
    console.log(inst.id);
    const ref = await db.collection('messages').doc(inst.id).get()
    console.log(ref.exists)
    console.log('data' , ref.data())
    const messageCurrent = ref.data()
    setMessages([{ id: ref.id , message: messageCurrent }, ...messages])
    
    setInput('');
}


  return (
    
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Messenger logo"/>
      <h2>Welcome , {username}</h2>

      <form className="app__form"> 
        <FormControl class="app__formControl">
          <Input className="input" placeholder="Enter a message..."  value={input} onChange={event => setInput(event.target.value)} type="text"/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit"  onClick={sendMessage}>
                      <SendIcon />
          </IconButton>
        </FormControl>  
      
      </form>
      


      <FlipMove>
      { 
        messages.map(({id ,message}) =>(
          
        <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>
      {console.log(messages)}
    
    </div>    

  );
}

export default App;
