import Main from "./containers/Main"
import Info from './containers/Info';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
 
function App() {
    return (
        <div >
            <BrowserRouter>
                <div>
                    <ResponsiveDrawer>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/info' element={<Info />} />
                    </Routes>
                    </ResponsiveDrawer>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
