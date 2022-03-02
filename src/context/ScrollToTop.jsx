import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Taken form react-router-dom documentaion as using react v17
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

