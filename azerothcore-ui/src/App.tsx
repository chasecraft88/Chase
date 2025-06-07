import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import ModelViewer from './components/viewer/ModelViewer';
import ConfigEditor from './components/editor/ConfigEditor';
import DatabaseEditor from './components/editor/DatabaseEditor';
import ScriptEditor from './components/editor/ScriptEditor';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Switch>
              <Route path="/viewer" component={ModelViewer} />
              <Route path="/config-editor" component={ConfigEditor} />
              <Route path="/database-editor" component={DatabaseEditor} />
              <Route path="/script-editor" component={ScriptEditor} />
              <Route path="/" exact>
                <h1>Welcome to AzerothCore UI</h1>
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;