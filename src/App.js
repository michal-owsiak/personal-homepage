import Header from "./features/Homepage/Header";
import Section from "./common/Section";
import List from "./common/List";
import Portfolio from "./features/Homepage/Portfolio";
import Footer from "./features/Homepage/Footer";
import {
  skillsetList,
  toLearnList,
  mail,
  footerCaption,
} from "./common/copy";
import ThemeSwitch from "./features/Homepage/Header/ThemeSwitch";

function App() {
  return (
    <>
      <Header />
      <Section
        title="My skillset includes 🛠️"
        content={<List content={skillsetList} />}
      />
      <Section
        title="What I want to learn next 🚀"
        content={<List content={toLearnList} />}
      />
      <Portfolio />
      <Footer
        mail={mail}
        text={footerCaption}
      />
    </>
  );
}

export default App;
