// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

import Login from './Pages/Login';
import Register from './Pages/Register';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
    </ApolloProvider>
  )
}

/*function App() {
  return (
    <>
   
    <Home/>
    <Section1/>
    <Section2/>
    
    <Login/>
    <Register/>
    </>
  );
}
*/
export default App;
