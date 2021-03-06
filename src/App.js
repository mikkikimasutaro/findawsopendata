import "./App.css";
import Main from "./containers/Main";
import Info from './containers/Info';
import DropDirectory from './containers/DropDirectory';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);
 
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <ResponsiveDrawer>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/info' element={<Info />} />
                        {/**<Route path='/drop' element={<DropDirectory />} />*/}
                    </Routes>
                    </ResponsiveDrawer>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
