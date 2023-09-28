import Section from "./common/Section";
import Header from "./features/Header";
import List from "./common/List";
import { skillsetList, toLearnList } from "./copy";
import Portfolio from "./features/Portfolio";

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
    </>
  );
}

export default App;
