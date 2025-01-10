import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Components/Header';
export default function App() {
  return ( <BrowserRouter>
  <Header/>
  
  <Routes>
    
    <Route path= '/' element={<Home />} />
    <Route path= '/sign-in' element={<SignIn />} />
    <Route path= '/sign-up' element={<SignUp />} />
    <Route path= '/about' element={<About />} />
    <Route path= '/profile' element={<Profile />} /> 
  </Routes>
    </BrowserRouter>
  );
}
// function App():
//This is a functional component in React, named App.
//return (<BrowserRouter> ... </BrowserRouter>):
//The return statement specifies what JSX this component will render on the page.
/*<BrowserRouter>:
This is a component provided by the react-router-dom library.
It sets up routing context for the app, enabling features like navigation using URLs.
Any routes or links defined inside <BrowserRouter> will be managed by React Router.
Without wrapping your app in <BrowserRouter>, routing components (like <Routes>, <Link>, or <Route>) will not work.
<Routes>:
Defines all the possible routes (or paths) in your app.
Inside <Routes>, each <Route> defines a specific path and the component to display when that path is matched.*/ 

/*<App /> defines what React will render (the virtual DOM).
document.getElementById('root') defines where React will render it (in the real DOM).
React's rendering flow:

React builds a virtual DOM tree starting with <App />.
React injects this tree into the real DOM node provided (root).
Browser renders the DOM, and you see the output.
ReactDOM.render(component, domNode) connects two distinct worlds:
 When you call ReactDOM.render(<App />, document.getElementById('root'));, you tell React:

Take the React Component tree starting from <App />.
Insert it into the HTML element (<div id="root">) in the browser's DOM.
The browser renders an HTML document, and React needs an anchor point to insert itself. The root element in your HTML file acts as that anchor.
Render means:

"To generate and display something on the screen."
"To take a component (like <App />) and show it in the browser's DOM.
index.html - BROWSER DOM - html hi dikhta hai screen pe isiliye hm css and js bhi html me hi link krte hain 
root-dhaga jo react aur html ko jodta hai .
App - suppose mobile app bna rhe . toh mobile app me jo app hai na vo man liya main screen hai
and header hi kewal aisa bhaag hai screen ka jisme kuch chlta hai jaise home click kro toh home khule about aur contact us 
baki header k neeche toh hr website me ek aada button submit vgareh ki aur images hi milti hain.
So App hi react hai hmara . ab react kya hai? - react hai html + inline css . but isme multiple html pages hain 
and hr page me uski seperate inline css. 
isiliye home about contact us ye sb pages hain and chote functional components bhi jo individual kaam krte hain unlike header jo bhaut fun comp. ko saath keke kaam krta hai , inme chlane vala kuch nhi hai . 
where App , Header - inhi ko toh chlana padta hai jisme inf. (home about) k saath call , apply now ye karya kiye jaate hain.
toh ek tareeke se call , apply now ye sirf ek page hain (html page)+ chote func comp. baki header khud me ek page hone k saath baki page bhi contain kr rha hai 
and combined roop se chl rha hai .  therefore Header is a functional component AND APP - sbse bada functional component jo poora react chla rha hai jisme multiple pages + multiple functional components contained hain . 


WHY REACT ROUTER?

Routes link paths to components dynamically, so you don't have to write manual if-else or condition-based rendering for paths.
EXAMPLE 
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  const currentPath = window.location.pathname; // Get the current URL path

  if (currentPath === '/') {
    return <Home />;
  } else if (currentPath === '/sign-in') {
    return <SignIn />;
  } else if (currentPath === '/sign-up') {
    return <SignUp />;
  } else if (currentPath === '/about') {
    return <About />;
  } else if (currentPath === '/profile') {
    return <Profile />;
  } else {
    return <h1>404 - Page Not Found</h1>; // Render a fallback for unknown paths
  }
}
window location pathname me jo bhi name hoga vo ifelse me check krega timecomplexity and all increase 
so we use routes taki URL me /about type ho toh directly jaye.
need for routing arises when you want to build a multi-page or multi-view application 
where users can navigate between different components based on the URL path in the browser.
*/