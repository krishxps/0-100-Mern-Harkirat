import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Routes/main";
import { SettingsPage } from "./Routes/SettingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}