import { ThemeProvider } from "styled-components";
import { LightTheme } from "./componants/Theme";
import GlobalStyle from "./globalStyle";
import {
  Route,
  Switch,
} from "react-router-dom";
import  Main  from "./componants/Main";
import  Aboutpage  from "./componants/AboutPage";
import  BlogPage  from "./componants/BlogPage";
import  MySkillsPage  from "./componants/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme  = {LightTheme}>
      <Switch>

        <Route exact path ="/" component ={Main}/>
        <Route exact path ="/about" component ={Aboutpage}/>
        <Route exact path ="/blog" component ={BlogPage}/>
        <Route exact path ="/skills" component ={MySkillsPage}/>
        
      
      </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
