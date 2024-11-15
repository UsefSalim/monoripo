import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigComponent } from "@sobrus-com/sobrus-design-system-v2/config";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ConfigComponent>
            <App />
        </ConfigComponent>
    </StrictMode>
);
