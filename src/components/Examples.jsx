import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function hanldeClick(currentSelectedButton) {
    setSelectedTopic(currentSelectedButton);
  }
  let tabContent = <p>please select a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => hanldeClick("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => hanldeClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => hanldeClick("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => hanldeClick("state")}
        >
          state
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
