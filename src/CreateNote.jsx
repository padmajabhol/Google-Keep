import React, { useState } from 'react';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value, //if name = title then it will equal it to value where it will be stored in note.title
            };
        });


    }

    const addEvent = (event) => {
        props.passNote(note);
        event.preventDefault()
        setNote({
            title: "",
            content: "",
        })


    }

    return <>
        {/* <div className="bg-gray-700 h-100"> */}
        <div>
            <form className=" w-96  grid mx-auto">
                <input value={note.title}
                    name="title"
                    // onChange={e => setNote({ ...note, title: e.target.value })}
                    onChange={InputEvent}
                    type="text"
                    placeholder="Title"
                    className="mt-5 h-10" autoComplete="off" />
                <textarea
                    rows=""
                    column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    // onChange={e => setNote({ ...note, content: e.target.value })}
                    className="h-20" rows="" column="" placeholder="write a note..." ></textarea>


                <button className=" mt-2 w-1/6  rounded-full py-2 px-5 cursor-pointer  border-primary   hover:text-white transition ease-out d bg-yellow-400" onClick={addEvent}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>

                </button>






            </form>
        </div>
    </>;
};

export default CreateNote;