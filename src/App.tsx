import React, { ReactElement } from "react";
import { RecoilRoot } from 'recoil';
import AppStack from "./navigator/AppStack";

const App = (): ReactElement => {
  return (
    <RecoilRoot>
       <AppStack />
    </RecoilRoot>
  );
};

export default App;
