import './index.css';
import { Route, Routes, A } from '@solidjs/router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Hero from './pages/Hero';
import SearchBooks from './pages/SearchBooks';
import { createSignal, onMount } from 'solid-js';

import loadingSpinner from './assets/giphy.gif';

function App() {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    // Initialization logic...

    // Simulating a delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div class=''>
      {loading() ? (
        <div class="flex items-center justify-center h-screen primary-background">
          <img src={loadingSpinner} alt="Loading Spinner" class='lg:scale-50'/>
        </div>
      ) : (
        <>
          <div class=" bg-sky-200 bg-opacity-50 phone:px-1 lg:px-3 phone:py-4 lg:py-5 mx-auto flex justify-between drop-shadow-md">
            <A href='/' class='lg:mt-1 ml-2 opacity-75 lg:scale-100 phone:scale-75'>
              <svg fill="none" stroke-width="1.25" xmlns="http://www.w3.org/2000/svg" stroke="#083344" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" style="overflow: visible;" height="2.25em" width="2.25em">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <path d="M9 22V12h6v10"></path>
              </svg>
            </A>
            <h1 class='text-blue-500 font-unbounded font-semibold phone:text-3xl lg:text-5xl'>BookVars</h1>
            <A href='/cart' class='lg:mt-1 mr-2 opacity-75 lg:scale-100 phone:scale-75'>
              <svg fill="none" stroke-width="1.25" xmlns="http://www.w3.org/2000/svg" stroke="#083344" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" style="overflow: visible;" height="2.25em" width="2.25em">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </A>
          </div>

          <Routes>
            <Route path="/hero" component={Hero} />
            <Route path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
