import React from 'react';

const CreateNote = () => {
    return <>
        {/* <div className="bg-gray-700 h-100"> */}
        <div>
            <form className=" w-96  grid mx-auto">
                <input type="text" placeholder="Title" className="mt-5 h-10" autoComplete="off" />
                <textarea className="h-20" rows="" column="" placeholder="write a note..." ></textarea>
                <button className=" mt-2 w-1/6 text-primary rounded-full py-2 px-5 text-xs font-bold cursor-pointer  border-primary  hover:bg-primary hover:text-white transition ease-out duration-500 bg-yellow-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg></button>
            </form>
        </div>
    </>;
};

export default CreateNote;