import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
    console.log(Wrapped);
    return (props) => {
        console.log(props);
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        console.log(bookstoreService);
                        console.log({ ...props });
                        return (<Wrapped {...props} bookstoreService={bookstoreService} />);
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
};

export default withBookstoreService;