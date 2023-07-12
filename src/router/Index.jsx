import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateCharacter from "../components/CreateCharacter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <CreateCharacter/>
    }
])