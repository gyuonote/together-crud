import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={PostListPage} path={['/@:username', '/']} exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={PostPage} path="/@:username/:postId" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
