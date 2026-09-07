import { NavLink, Outlet } from "react-router";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/home/about" },
  { label: "Contact", to: "/home/contact" },
  { label: "Student", to: "/student" },
  { label: "Details", to: "/student/details" },
  { label: "Message", to: "/student/message" },
  { label: "Register", to: "/student/register" },
];

export default function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <nav style={{ background: "#333", padding: "10px 20px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#aaa",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: "14px",
            })}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div style={{ padding: "40px 60px" }}>
        <Outlet />
      </div>
    </div>
  );
}
