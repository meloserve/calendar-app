import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="layout">

  <div className="left">
    <p>01 Dashboard</p>
    <p>02 Calendar</p>
    <p>03 Capacity</p>
    <p>04 Settings</p>
  </div>

  <div className="center">
    <h1>
      WORKS
      <br />
      DIGITAL
    </h1>

    <div className="date">
      <p>SUNDAY</p>
      <h2>07</h2>
      <p>JUNE 2026</p>
    </div>
  </div>

  <div className="right">
    <h3>18H</h3>
    <p>AVAILABLE</p>
  </div>

</div>
  );
}