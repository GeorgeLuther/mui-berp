import { useState } from "react";
import "./App.css";
import Theme from "../../contexts/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";
import NavDrawer from "./NavDrawer/NavDrawer";

function App() {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  const toggleSidebar = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      setIsSidebarShown(true);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <NavDrawer isSidebarShown={isSidebarShown} />
      </div>
    </ThemeProvider>
  );
}

export default App;
