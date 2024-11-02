import React from 'react';

const Book = ({ book }) => {
    const { bookName, author , image} = book;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl p-4" >
                <figure className='bg-blue-400 py-6 rounded-2xl'>
                    <img
                        src={image}
                        alt="Shoes" className='h-[166px]' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{author}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;