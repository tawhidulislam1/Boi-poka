import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import markReadDb from '../../utility/markReadDb';
import { useEffect, useState } from 'react';
import AddedList from '../AddedList/AddedList';

const ListedBooks = () => {
    const [readBook, setReadBook] = useState([]);
    const allBooks = useLoaderData()
    useEffect(() => {
        const storedReadList = markReadDb.getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const ReadBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBook(ReadBookList);
    }, [])
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const storedWishList = markReadDb.getStoreWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const wishListBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishlist(wishListBookList);
    }, [])
    return (
        <div>
            <h3 className='text-xl text-center font-bold'>Listed Books </h3>
            <Tabs>
                <TabList>
                    <Tab>Reading Book List ({readBook.length})</Tab>
                    <Tab>Wishlist List ({wishlist.length})</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 '>
                    {
                        readBook.map(book => <AddedList  key={book.bookId} book={book}></AddedList>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 '>
                    {
                        wishlist.map(book => <AddedList  key={book.bookId} book={book}></AddedList>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;