import './App.css';
import DisabledButton from './Components/Button/DisabledButton';
import MainButton from './Components/Button/MainButton';
import OutlineButton from './Components/Button/OutlineButton';
import SubButton from './Components/Button/SubButton';

function App() {

  return (
  <>
    <MainButton></MainButton>
    <SubButton></SubButton>
    <OutlineButton></OutlineButton>
    <DisabledButton></DisabledButton>
  </>
  );
}

export default App;
