import React from 'react';
import Header from "@/components/header-footer/header";
import Footer from "@/components/header-footer/footer";

const App = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default App;