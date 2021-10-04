import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from './features/header';
import aquarium from './features/aquarium';
import counterBoard from './containers/example';
import './App.css';

// App.tsxにAPI通信の制御を一元化　→　次回対応
// import { useEffect, useState } from 'react';
// import fetch from 'node-fetch';

const App: React.FC = () => {

  // API通信の一元化は次回対応
  // const [query, setQuery] = useState([]);
  // const [data, setData] = useState([]);

  // GET用
  // useEffect(() => {
  //   // 開発用URL
  //   const URL = `http://localhost:8080/api/aquariummer/${query}`;
  //   // 本番用URL
  //   // const URL = `http://aquariummer/api/aquariummer/${query}`;
  //   const appInit = {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'default',
  //   };

  //   // fetch(URL, appInit).then( res => res.json())

  //     fetch(URL, appInit)
  //     .then(res => 
  //       res.json()
  //     )
  //     .then(json => {
  //       setQuery(json['query'])
  //       setData(json['data'])
  //     })
  // }, [query])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={aquarium} />
        <Route exact path="/example/CounterBoard" component={counterBoard} />
        <Redirect from="/user/profile/:userId" to="/user/:userId" />
        <Route path="/user/:userId" component={aquarium} />
        <Redirect push to="/" />
      </Switch>
    </>
  )
}

export default App;
