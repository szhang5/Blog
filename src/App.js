import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Album from './containers/Album';
import Post from './containers/Post';
import CategoryPost from './containers/CategoryPost';
import SideBar from './containers/SideBar';
import Footer from './components/Footer';
import styles from './assets/styles/App.css';
import gridStyles from './assets/styles/grid.css';


const App = () => (
  <BrowserRouter>
    <div className={styles.mainDiv}>
      <main>
        <div className={gridStyles.row}>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/album" component={Album} />
            <Route exact path="/category/:name" component={CategoryPost} />
            <Route path="/post/:slug" component={Post} />
          </Switch>
        </div>
        <Footer />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
