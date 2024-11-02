import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books , setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Books</h2>
            <p>books{books.length}</p>
        </div>
    );
};

export default Books;