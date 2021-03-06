import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from './icon.png';
import Home from './Home';
import About from './About';

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

function fetchUsername() {
  const usernames = ['mike', 'june', 'jamie'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  })
}

export default function App({ page }) {
  const [currentPage, setCurrentPage] = useState(page);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    window.onpopstate = event => {
      setCurrentPage(event.state);
    };

    fetchUsername().then(data => setUsername(data));
  }, []);

  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setCurrentPage(newPage);
  }

  const PageComponent = currentPage === 'home' ? Home : About;

  return (
    <Container>
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent username={username} />
      <img src={Icon} />
    </Container>
  );
}
