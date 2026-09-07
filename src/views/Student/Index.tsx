import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function StudentIndex() {
  const [registeredStudent, setRegisteredStudent] = useState<string | null>(null);

  useEffect(() => {
    setRegisteredStudent(localStorage.getItem("registeredStudent"));
  }, []);

  return (
    <div>
      <h1>Student Index</h1>
      <p>This is the Index action method of StudentController</p>
      {registeredStudent && (
        <p>
          Registered student: {" "}
          <Link to="/student/register">{registeredStudent}</Link>
        </p>
      )}
    </div>
  );
}
