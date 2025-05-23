import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JsxRules from "./components/JsxRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import Person from "./components/Person";
import Product from "./components/Product";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FeatchData from "./components/FeatchData";
import UseContext from "./components/UseContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterReducer from "./components/CounterReducer";

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

// Showing the List by map
// const App = () => {
//   return (
//     <div>
//       <h1>USERS Info</h1>
//       <UserList />
//       <h1>Products Info</h1>
//       <ProductList />
//     </div>
//   );
// };

// Prop Exercise
// const App = () => {
//   return (
//     <div>
//       <h1>Person Info</h1>
//       <Person name="Jawad" age={22} />
//       <h1>Product Info</h1>
//       <Product name="Laptop" price="$1200" />
//     </div>
//   );
// };

//Conditional Rendering
// const App = () => {
//   return (
//     <div>
//       <UserStatus loggedIn={true} isAdmin={true} />
//       <Greeting timeOfDay={"morning"} />
//       <Weather temperature={20} />
//     </div>
//   );
// };

// Styling and Icon

// const App = () => {
//   return (
//     <div>
//       <StyledCard />
//       <ProfileCard />
//       <IconComponent />
//     </div>
//   );
// };

// State with useState()

// const App = () => {
//   return (
//     <div>
//       <h1>Counter</h1>
//       <Counter />
//       <h1>Todo List</h1>
//       <TodoList />
//       <h1>Profile Info</h1>
//       <Profile />
//       <h1>Shopping List</h1>
//       <ShoppingList />
//     </div>
//   );
// };

// useEffect
// const App = () => {
//   return (
//     <div>
//       <BasicEffect />
//       <CounterEffect />
//       <FeatchData />
//     </div>
//   );
// };

// UseContext(L)
// const App = () => {
//   return (
//     <div>
//       <UseContext>
//         <UserProfile />
//         <UpdateUser />
//       </UseContext>
//     </div>
//   );
// };

// useReducer()
const App = () => {
  return (
    <div>
      <CounterReducer />
    </div>
  );
};

export default App;
