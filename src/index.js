import "antd/dist/antd.min.css";
import ReactDOM from "react-dom/client";
import { Box } from "./Component/Box";
import { TextInputUI } from "./Component/TextInputUI";

export function Home() {
  return (
    <div>
      <h2>과제1 </h2>
      <Box />
      <h2>과제2 </h2>
      <TextInputUI />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
