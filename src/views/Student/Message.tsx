export default function StudentMessage() {
  return (
    <div>
      <p>Hello from the Message action method!</p>
      <p style={{ color: "#555", fontSize: "14px", marginTop: "16px" }}>
        In ASP.NET MVC, this would be returned using Content().
        In React, we're simply rendering the text inside a component.
      </p>
    </div>
  );
}
