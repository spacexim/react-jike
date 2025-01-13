// 路由配置

import Layout from '@/pages/Layout'; // src/pages/Layout/index.js
import Login from '@/pages/Login'; // src/pages/Login/index.js

import { createBrowserRouter } from 'react-router-dom';

// 配置路由实例

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default router;