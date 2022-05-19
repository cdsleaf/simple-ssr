 import React, { useState, useEffect } from 'react';
 import Home from './Home';
 import About from './About';

 export default function App({ page }) {
   const [currentPage, setCurrentPage] = useState(page);
   useEffect(() => {
     window.onpopstate = event => {
      setCurrentPage(event.state);
     };
   }, []);

   function onChangePage(e) {
     const newPage = e.target.dataset.page;
     window.history.pushState(newPage, '', `/${newPage}`);
     setCurrentPage(newPage);
   }

   const PageComponent = currentPage === 'home' ? Home : About;

   return (
     <div className="container">
       <button data-page="home" onClick={onChangePage}>
         Home
       </button>
       <button data-page="about" onClick={onChangePage}>
         About
       </button>
       <PageComponent />
     </div>
   );
 }
