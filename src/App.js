import Header from "./features/Header";
import Section from "./common/Section";
import List from "./common/List";
import Portfolio from "./features/Portfolio";
import Footer from "./features/Footer";
import {
  skillsetList,
  toLearnList,
  mail,
  footerCaption,
} from "./copy";

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
