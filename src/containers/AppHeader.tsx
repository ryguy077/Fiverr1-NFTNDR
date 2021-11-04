import React from "react";

import "./AppHeader.css";

// define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
  title: string;
  description: string
  mintprice: string
};

// create React Functional Component variable that will render our code for our header.
// React.FC takes a type of the props that can be passed into the component
const AppHeader: React.FC<AppHeaderProps> = React.memo(
  ({ title, description, mintprice }) => {
    return (
      <header className="app-header">
        <section className="app-title">
        <a href="https://crypto-bananas.com">
							<img width="100" height="100" src="https://crypto-bananas.com/wp-content/uploads/2021/10/output-onlinepngtools-4.png"/>
          </a> <a href="https://crypto-bananas.com"></a>
          <a href="https://crypto-bananas.com" className="home">HOME</a>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h3>{description}</h3>
          <h4>{mintprice}</h4>
        </section>
      </header>
    );
  }
);

export default AppHeader;