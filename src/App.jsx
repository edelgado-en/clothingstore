import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {

    const dispatch = useDispatch(); //there is only one dispatch in redux

    useEffect(() => {
        console.log('app use effect');
        //this listener is listening for auth changes meaning sign-in or sign-out
         const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
            createUserDocumentFromAuth(user);
          }
          dispatch(setCurrentUser(user));
        });
    
        return unsubscribe;

      }, []); //dispatch never changes so there is no need to added, but the linter does not know it

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                {/* index makes the Home component to render by default when you go to / */}
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />}/>
            </Route>
        </Routes>
    );
};

export default App;
