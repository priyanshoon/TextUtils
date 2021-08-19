// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container">
        <TextForm heading="Enter Your Text To Analyze!" />
      </div>
    </>
  );
}

export default App;
