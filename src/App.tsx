import "./css/App.css";
import "./css/modal.css";
import Providers from "./providers/Providers";
import RoutesComponent from "./routes/Routes";

function App() {
  return (
    <>
      <Providers>
        <RoutesComponent />
      </Providers>
    </>
  );
}

export default App;
