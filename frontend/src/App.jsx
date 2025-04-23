import React, { Suspense } from "react";
import ThemeProvider from "./context/themeContext/ThemeContext";
import { lazy } from "react";
import { Spin } from "antd";
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-screen">
            <Spin size="large" />
          </div>
        }
      >
        
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
