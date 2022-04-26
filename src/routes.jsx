import React from "react";
import About from "./pages/About";
import Admin from "./pages/Admin_test";
import Blog from "./pages/Blog";
import Coop from "./pages/Coop";
import Main from "./pages/Main";
import Auth from "./pages/Auth";    
import { ABOUT_ROUTE, ADMIN_ROUTE, BLOG_ROUTE, COOPERATION_ROUTE, MAIN_ROUTE, AUTH_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <Main/>
    },
    {
        path: ABOUT_ROUTE,
        Element: <About/>
    },
    {
        path: BLOG_ROUTE,
        Element: <Blog/>
    },
    {
        path: COOPERATION_ROUTE,
        Element: <Coop/>
    },
    {
        path: AUTH_ROUTE,
        Element: <Auth/>
    },
]