import LoginPage from "./pages/login-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register-page";
import { FormProvider } from "./context/form-context";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
