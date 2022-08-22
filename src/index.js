import ReactDOM from "react-dom/client";
import { Box } from "./Component/Box";

export function Home() {
  return (
    <div>
      <Box />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
