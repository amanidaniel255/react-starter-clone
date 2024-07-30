import CoreConcept from "./components/CoreConcept.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
