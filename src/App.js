import './App.css';
import Button from './components/Button'
import Section from './components/Section'
import DropdownButton from './components/DropdownButton'
function App() {

  return (
    <div >
      <Section headerText="Perils We Insure Against"></Section>
      <Section headerText="Types of Boats Insured"></Section>
      <Section headerText="We Also Insure"></Section>
      <DropdownButton text="info"></DropdownButton>
    </div>

  );
}

export default App;
