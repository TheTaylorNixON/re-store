import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css';
import { HomePage, CartPage } from '../pages';

// import { withBookstoreService } from '../hoc';


const App = () => {
    return (
        <Switch>
            <Route path="/"
                component={HomePage}
                exact
            />

            <Route path="/cart"
                component={CartPage}
            />
        </Switch>
    );
};

export default App;


// const App = ({ bookstoreService }) => {
//     console.log(bookstoreService.getBooks());
//     return (
//         <div>App</div>
//     )
// };

// export default withBookstoreService()(App);