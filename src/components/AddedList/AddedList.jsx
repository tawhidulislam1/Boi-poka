import React from 'react';
import { Link } from 'react-router-dom';

const AddedList = ({ book }) => {
    const { image, bookName, author, bookId, tags, publisher,totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className='flex items-center gap-3 bg-slate-900 border-2 my-5 justify-center py-5'>
                <img src={image} alt="" className='h-40' />
                <div>
                    <h3>{bookName}</h3>
                    <h3>{author}</h3>
                    <div className='flex justify-start items-center gap-2 my-2'>
                        <h2 className='font-bold'>Tags:</h2>{
                            tags.map((tag, idx) => <button key={idx} className="btn btn-sm btn-error">{tag}</button>)
                        }
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between gap-2'>
                    <h2>@publisher: {publisher}</h2>
                    <h2>@Total Pages: {totalPages}</h2>

                    </div>
                   
                </div>
            </div>
        </Link>
    );
};

export default AddedList;