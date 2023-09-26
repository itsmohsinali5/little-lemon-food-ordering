import Naviagtion from "./navigation/Navigation";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Naviagtion />
    </AppProvider>
  );
}