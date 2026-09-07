export default function HomeAbout() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <p>This represents the ASP.NET MVC:</p>
      <pre style={{ lineHeight: "1.8", fontFamily: "monospace", marginLeft: "20px" }}>
{`HomeController
      ↓
About()
      ↓
About.cshtml`}
      </pre>
      <p>In React, it is:</p>
      <pre style={{ lineHeight: "1.8", fontFamily: "monospace", marginLeft: "20px" }}>
{`React Router
      ↓
About.jsx
      ↓
Rendered page`}
      </pre>
    </div>
  );
}
