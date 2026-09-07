import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested URL did not match any route.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
