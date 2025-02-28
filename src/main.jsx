import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Main = () => {
  useEffect(() => {
    // Google Analytics script load
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `{https://www.googletagmanager.com/gtag/js?id=${import.meta.env.GOOGLE_ANALYTICS}}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${import.meta.env.GOOGLE_ANALYTICS}');
    `;
    document.head.appendChild(script2);
  }, []);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);

