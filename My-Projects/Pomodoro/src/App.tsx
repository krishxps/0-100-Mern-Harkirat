import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "./Routes/main";
import { SettingsPage } from "./Routes/SettingsPage";
import { NAME } from "./constants/constants";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    document.title = NAME;
  }, []);
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
