import SearchBar from "./components/SearchBar";
import useIsOnline from "./Custom_Hooks/UseIsOnline";

function App() {
  const isOnlineOrOffline = useIsOnline();
  return (
    <div>
      <SearchBar />
      <div>{isOnlineOrOffline ? "Online" : "Offline"}</div>
    </div>
  );
}

export default App;
