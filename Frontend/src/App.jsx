import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Categories from './Categories/Categories.jsx';
import Contact from './Contact/Contact.jsx';
import SignUp from './Components/HomeComponents/SignUp.jsx';
import { useAuth } from './ContextApi/AuthProvider.jsx';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from './Dashboard/DashboardLayout.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import UploadBook from './Dashboard/UploadBook.jsx';
import ManageBook from './Dashboard/ManageBook.jsx';
import EditBook from './Dashboard/EditBook.jsx';
import Cart from './Components/CategoryComponents/Cart.jsx';
import { CartProvider } from './ContextApi/CartContext.jsx';
import { CounterProvider } from './ContextApi/CounterContextApi.jsx';


function ProtectedRoute({ children }) {
  const [authUser] = useAuth();
  return authUser ? children : <Navigate to="/signup" />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/categories',
    element: (
      <ProtectedRoute>
        <Categories />
      </ProtectedRoute>
    ),
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'upload',
        element: <UploadBook />,
      },
      {
        path: 'managebook',
        element: <ManageBook />,
      },
      {
        path: 'editbook/:id',
        element: <EditBook />,
        loader: ({ params }) => fetch(`http://localhost:4001/book/${params.id}`),
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);
  const [authUser] = useAuth();

  return (
     <CounterProvider>  
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
      </CounterProvider>
  );
}

export default App;
