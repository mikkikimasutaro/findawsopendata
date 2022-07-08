import Main from "./containers/Main"
import Info from './containers/Info';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// コンポーネント読み込み
import WrapMainContent from './components/WrapMainContent'

Amplify.configure(awsconfig);

// 不明なRouteは全てNotFound
const NotFound = () => {
    return(
      <h2>ページが見つかりません</h2>
    )
  }
  
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
