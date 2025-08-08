import logoSVG from "./assets/images/logo-full.svg";
import Form from "./components/Form";

function App() {
  return (
    <div className="max-w-[80%] m-auto">
      <div className="m-auto w-fit">
        <img src={logoSVG} alt="Logo Ticket Generator" className="h-36" />
      </div>
      <Form />
    </div>
  );
}

export default App;
