import { useState } from "react";

export default function StudentRegister() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const registeredName = name.trim();
      localStorage.setItem("registeredStudent", registeredName);
      setResult(registeredName);
    }
  };

  return (
    <div>
      <h1>Student Registration</h1>

      {result === null ? (
        <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
          <div style={{ marginBottom: "12px" }}>
            <label htmlFor="studentName" style={{ display: "block", marginBottom: "6px" }}>
              Student Name:
            </label>
            <input
              id="studentName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: "6px 10px", width: "260px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "7px 20px",
              background: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      ) : (
        <div style={{ marginTop: "16px" }}>
          <p>Registered student: {result}</p>
          <button
            onClick={() => {
              localStorage.removeItem("registeredStudent");
              setResult(null);
              setName("");
            }}
            style={{
              marginTop: "12px",
              padding: "7px 20px",
              background: "#555",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Register another
          </button>
        </div>
      )}
    </div>
  );
}
