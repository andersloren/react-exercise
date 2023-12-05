import ReactDOM from "react-dom/client";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className='container mt-5'>Fullstack Developer Skills</h1>
    <div className="container">
      <Form />
    </div>
  </div>
);
