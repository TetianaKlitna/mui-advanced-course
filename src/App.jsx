import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import ContactForm from "./pages/ContactForm/ContactForm";
import ContactCardGrid from "./pages/ContactCardGrid/ContactCardGrid";
import ContactTable from "./pages/ContactTable/ContactTable";
import ContactDataGrid from "./pages/ContactDataGrid/ContactDataGrid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="form" element={<ContactForm />} />
          <Route path="grid" element={<ContactCardGrid />} />
          <Route path="table" element={<ContactTable />} />
          <Route path="datagrid" element={<ContactDataGrid />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
