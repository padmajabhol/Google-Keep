import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {

    // alert("I m clicked")
    setAddItem((prevData) => {
      return [...prevData, note]
    })
  };

  const onDelete = (id) => {
    setAddItem((oldItems) => {
      return oldItems.filter((arrayElem, indx) => {
        return indx !== id;
      })
    }
    );

  };


  return <>
    <Header />
    <CreateNote passNote={addNote} />
    <ol>
      {addItem.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
    </ol>
    <Footer />
  </>;
};

export default App;
