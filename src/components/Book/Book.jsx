import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl p-4" >
                    <figure className='bg-blue-400 py-6 rounded-2xl'>
                        <img
                            src={image}
                            alt="Shoes" className='h-[166px]' />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-2'>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-outline btn-xs btn-error">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By: {author}</p>
                        <div className='border-t-2 border-dashed my-1'></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;