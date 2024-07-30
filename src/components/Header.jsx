import reactImage from "../assets/react-core-concepts.png";
const reactTerms = ["Fundamental", "Crucial", "Core"];

export default function Header() {
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const term = reactTerms[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="react-image" />
      <h1>React Essentials</h1>
      <p>
        {term} react concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
