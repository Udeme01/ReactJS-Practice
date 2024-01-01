import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";
import { Welcome } from "./components/Welcome";
import Car from "./components/Car";
import Message from "./components/Message";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import Stylesheet from "./components/Stylesheet";
import InlineSheet from "./components/InlineSheet";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import RefDemo from "./components/RefDemo";
import InputRef from "./components/InputRef";
import FocusInputRef from "./components/FocusInputRef";
import FRParentRef from "./components/FRParentRef";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundariesOne from "./components/ErrorBoundariesOne";
import ErrorBoundariesTwo from "./components/ErrorBoundariesTwo";
import ClickCounterHOC from "./components/ClickCounterHOC";
import HoverCounterHOC from "./components/HoverCounterHOC";

import ClickCounterRP from "./components/ClickCounterRP";
import HoverCounterRP from "./components/HoverCounterRP";
import CounterRP from "./components/CounterRP";
import ContextComponentC from "./components/ContextComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Greet name = 'Func Props(greet)'/> */}
      {/* <Welcome name = 'iBelieve'/> */}
      {/* <Car /> */}
      {/* <Message /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <Stylesheet primary = {true} /> */}
      {/* <InlineSheet /> */}
      {/* <h1 className='error'>vanilla css styles</h1> */}
      {/* <h1 className={styles.success}>css modules!</h1> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <RefDemo /> */}
      {/* <InputRef /> */}
      {/* <FocusInputRef /> */}
      {/* <FRParentRef /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundariesTwo>
        <ErrorBoundariesOne heroName="batman" />
      </ErrorBoundariesTwo>

      <ErrorBoundariesTwo>
        <ErrorBoundariesOne heroName="superman" />
      </ErrorBoundariesTwo>

      <ErrorBoundariesTwo>
        <ErrorBoundariesOne heroName="Joker" />
      </ErrorBoundariesTwo> */}
      {/* <ClickCounterHOC name = 'Esther' />
      <HoverCounterHOC name = 'Naomi' /> */}

      {/* <ClickCounterRP />
      <HoverCounterRP /> */}

      {/* <CounterRP>
        {(count, incrementCount) => (
          <ClickCounterRP count={count} incrementCount={incrementCount} />
        )}
      </CounterRP>

      <CounterRP>
        {(count, incrementCount) => (
          <HoverCounterRP count={count} incrementCount={incrementCount} />
        )}
      </CounterRP> */}

      <UserProvider value = 'Maria!'>
        <ContextComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
