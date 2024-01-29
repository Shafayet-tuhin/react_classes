import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { counterIncrease } from "./store/actions/counters";
import { counterDecrease } from "./store/actions/counters";
import { changeBgColor, changeTextColor, resetTheme } from "./store/actions/theme";

function App() {
  const counter = useSelector((store) => store.counter);
  const theme = useSelector((store) => store.theme)
  
  const dispatch = useDispatch();
  console.log(theme);
  return (
    <div  style={{ color :theme.color , backgroundColor: theme.bgColor }}>
      <div>

         <div >
              <h2 className="main_text"><strong>The value of the counter is {counter}</strong></h2>
         </div>

        <button onClick={() => dispatch(counterIncrease(1))}>Plus</button>
        <button onClick={() => dispatch(counterDecrease(1))}>Minus</button>
        <button onClick={() => dispatch(counterIncrease(10))}>Plus 10</button>
        <button onClick={() => dispatch(counterDecrease(10))}>Minus 10</button>
      </div>

     <br />

     <div className="bg">

        <div>
          <button onClick={() =>dispatch(changeBgColor('green'))} >Change Color to Green</button>
          <button onClick={() =>dispatch(changeBgColor('purple'))}>Change Color to Purple</button>
          <button onClick={() =>dispatch(changeBgColor('blue'))}>Change Color to Blue</button>
        </div>
         <br />
        <div className="text">
          <button onClick={() => dispatch(changeTextColor('green'))}>Change text to Green</button>
          <button onClick={() => dispatch(changeTextColor('purple'))}>Change text to Purple</button>
          <button onClick={() => dispatch(changeTextColor('blue'))}>Change text to Blue</button>
        </div>
        
        <div>
          <button onClick={()=> dispatch(resetTheme())}>Reset</button>
        </div>

      </div>
    </div>
  );
}

export default App;
