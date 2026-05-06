import { createRoot } from "react-dom/client";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
