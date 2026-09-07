import { useParams } from "react-router";

export default function StudentFind() {
  const { id } = useParams();

  return (
    <div>
      <h1>Student Search</h1>
      <p>You searched for Student ID: {id}</p>
    </div>
  );
}
