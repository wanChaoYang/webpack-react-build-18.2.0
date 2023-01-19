import React from "react";
const container = document.getElementById('app');
import { createRoot } from 'react-dom/client';
const root = createRoot(container);
import App from "./App";
root.render(<App />);
