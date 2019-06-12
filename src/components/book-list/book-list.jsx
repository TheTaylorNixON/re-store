import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ booksLoaded }, dispatch);

    // return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks));
    //     }
    // }
}

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);