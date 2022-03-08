import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CountryPage from "./pages/CountryPage/CountryPage";

export default function App() {
  const content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:code" element={<CountryPage />} />
    </Routes>
  );
  const footer = <>©2022</>;

  return <Layout content={content} footer={footer} />;
}
