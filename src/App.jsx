import { useState } from "react";
import Countries from "./components/Countries";

function App() {
  const [totalVisited, setTotalVisited] = useState(0);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-semibold mb-2">Countries of the World</h1>
      <h2 className="text-2xl font-medium mb-10">Visited countries: {totalVisited}</h2>
      <Countries totalVisited={totalVisited} setTotalVisited={setTotalVisited} />
    </div>
  )
}

export default App;
