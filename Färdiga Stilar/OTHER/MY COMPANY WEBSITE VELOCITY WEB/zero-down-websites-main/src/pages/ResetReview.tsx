import { useEffect } from "react";

export default function ResetReview() {
  useEffect(() => {
    localStorage.removeItem("vs_visited");
    localStorage.removeItem("vs_rated");
    console.log("Review popup reset.");
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>✓ Review popup reset</h2>
      <p>Both flags cleared. Close this tab, then visit the site twice to trigger the popup again.</p>
    </div>
  );
}