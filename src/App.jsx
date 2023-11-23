import { lazy, Suspense } from "react";
import { Router } from './components/Router.jsx'
import { Route } from "./components/Route.jsx";
import Page404 from "./pages/404"
import SearchPage from './pages/Search'
import './App.css'

const LazyAboutPage = lazy(() => import("./pages/About.jsx"))
const LazyHomePage  = lazy(() => import("./pages/Home.jsx"))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router defaultComponent={Page404}>
        <Route path="/" Component={LazyHomePage} />
        <Route path="/about" Component={LazyAboutPage} />
        <Route path="/search/:query" Component={SearchPage} />
      </Router>
    </Suspense>
  )
}

export default App