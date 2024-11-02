import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const bookData = data.find(book => book.bookId === id);
    const { image, bookId: currentId,category, review, author, bookName , tags } = bookData;
    return (
        <div className="hero bg-base-200 h-auto">
            <div className="hero-content flex-col items-center lg:flex-row">
                <figure className='h-[560px] w-[425px] '>
                    <img
                        src={image}
                        className="max-w-60 rounded-lg shadow-2xl w-[425px] " />
                </figure>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="font-bold">By: {author}</p>
                    <div class="divider"></div>
                    <h5>{category}</h5>
                    <div class="divider"></div>
                    <p className="py-1">
                        {review}
                    </p>
                    <div className='flex justify-start gap-2 my-2'>
                            Tags:{
                                tags.map((tag, idx) => <button key={idx} className="btn btn-outline btn-sm btn-error">{tag}</button>)
                            }
                        </div>
                    <div class="divider"></div>
                    
                    <button className="btn btn-outline btn-accent mr-2">Read</button> 
                    <button className="btn btn-accent">Wish List</button> 
                </div>
            </div>
        </div>
    );
};

export default Bookdetail;