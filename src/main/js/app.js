const React = require('react');
const ReactDOM = require('react-dom');
//const client = require('./client');
const {createBrowserRouter,RouterProvider} = require('react-router-dom')


const HomePage = require('./pages/home')
const NuevoMusicoPage = require('./pages/nuevo-musico')

const routerPrincipal = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/nuevo-musico", element: <NuevoMusicoPage /> },
]);

ReactDOM.render(
<React.StrictMode>
	<RouterProvider router={routerPrincipal}/>
</React.StrictMode>,
document.getElementById('react'))
