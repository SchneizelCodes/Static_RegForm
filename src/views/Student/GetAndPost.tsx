import { useNavigate } from "react-router";

export default function StudentGetAndPost() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Get and Post</h1>
      <p style={{ marginBottom: "16px" }}>
        This is the equivalent of <code>return RedirectToAction("Index");</code>
      </p>
      <button
        onClick={() => navigate("/student")}
        style={{
          padding: "7px 20px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
    </div>
  );
}
