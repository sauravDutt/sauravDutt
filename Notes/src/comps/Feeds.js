import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyB5lHI6diU3Fr5JhlAcp3FrhQJCQXT6P0w",
    authDomain: "engaged-carving-241615.firebaseapp.com",
    databaseURL: "https://engaged-carving-241615.firebaseio.com",
    projectId: "engaged-carving-241615",
    storageBucket: "engaged-carving-241615.appspot.com",
    messagingSenderId: "432995599324",
    appId: "1:432995599324:web:e2e6cc2095702e2609c519"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Feeds = ({setShowFeeds}) => {
    
    const [user] = useAuthState(auth);
    const removeInfo = (e) => {
        if (e.target.classList.contains('infoBackdrop')) {
            setShowFeeds(null);
        }
      }
    
    // // The following is a very bad practice the document.getElementById is not the way.......
    // const removeInfo = (e) => {
    //     if (e.target.classList.contains('infoBackdrop')) {
    //         document.getElementById('information').style.display='none';
    //     }
    // }
    return (
        <motion.div className="infoBackdrop" id='information' onClick={removeInfo}
            initial = {{opacity: 0}}
            animate = {{ opacity: 1}}
        >
            <motion.div className="post"
                initial = {{y:"-100vh"}}
                animate = {{ y: 0}}
            >
                <div className='post-info'>
                    <h3 className='post-title'>Insights</h3> <SignOut />
                    <p>
                        The agenda for today is <b> Artificial Neural Networks</b>, feel free to share any insight on the topic.🍺
                    </p>
                    <section>
                        {user ? <ChatRoom /> : <SignIn />}
                    </section>

                    <br />
                    <br />
                </div>
            </motion.div>
        </motion.div>

        
    )

    function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
        <br />
      <button className="homeBtn" onClick={signInWithGoogle}>Sign in </button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='Profile img'/>
      <p>{text}</p>
    </div>
  </>)
}
}

export default Feeds;