import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Album from './containers/Album';
import Post from './containers/Post';
import About from './containers/About';
import PostByCategory from './containers/PostByCategory';
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
            <Route exact path="/about" component={About} />
            <Route exact path="/category/:name" component={PostByCategory} />
            <Route path="/post/:slug" component={Post} />
          </Switch>
        </div>
        <Footer />
      </main>
    </div>
  </BrowserRouter>
);

export default App;
