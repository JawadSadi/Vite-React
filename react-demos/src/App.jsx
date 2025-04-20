import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JsxRules from "./components/JsxRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

// First Trainning

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />

//     </div>
//   );
// };

// Learn Three JSX Rules

// const App = () => {
//   return (
//     <div>
//       <WelcomeMessage />
//       <JsxRules />
//     </div>
//   );
// };

// Dynamic JSX

// const App = () => {
//   return (
//     <div>
//       <h1>USER</h1>
//       <Greeting />
//       <h1>Product</h1>
//       <ProductInfo />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <h1>USER</h1>
      <Greeting />
      <h1>Product</h1>
      <ProductInfo />
    </div>
  );
};

export default App;
