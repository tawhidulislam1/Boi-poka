import React from 'react';
import { Link } from 'react-router-dom';

const AddedList = ({ book }) => {
    const { image, bookName, author , bookId} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className='flex items-center gap-3 bg-slate-900 border-2 my-5 justify-center py-5'>
                <img src={image} alt="" className='h-40' />
                <div>
                    <h3>{bookName}</h3>
                    <h3>{author}</h3>
                </div>
            </div>
        </Link>
    );
};

export default AddedList;