import { useEffect, useState } from "react";

export default function App() {
 
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    fetch("/api/v1/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json() as Promise<{ status: string }>;
      })
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("API unavailable"));
  }, []);

  return (
    <main>
      <h1>Simple Chat</h1>
      <p>API status: {status}</p>
    </main>
  );
}