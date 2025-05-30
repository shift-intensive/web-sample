import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

import { routeTree } from './routeTree.gen';

import './index.css';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
