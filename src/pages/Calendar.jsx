import "../styles/Calendar.css";

export default function Calendar({ onNavigate }) {
  const events = [
    {
      id: 1,
      time: "09:00",
      end: "10:00",
      title: "CLIENT MEETING",
      project: "WORKS DIGITAL",
      type: "MEETING",
      status: "CONFIRMED",
    },
    {
      id: 2,
      time: "11:00",
      end: "14:00",
      title: "PROJECT / WEBSITE",
      project: "PROJECT A",
      type: "WORK",
      status: "IN PROGRESS",
    },
    {
      id: 3,
      time: "15:00",
      end: "16:00",
      title: "INTERVIEW",
      project: "WORKS DIGITAL",
      type: "BOOKING",
      status: "BOOKED",
    },
  ];

  return (
    <div className="calendar-page">
      <aside className="calendar-sidebar">
        <div>
          <h2>WORKS DIGITAL</h2>
          <p>CALENDAR OS</p>
        </div>

        <nav>
          <p onClick={() => onNavigate("dashboard")}>01 DASHBOARD</p>
          <p className="active">02 CALENDAR</p>
          <p onClick={() => onNavigate("capacity")}>03 CAPACITY</p>
          <p onClick={() => onNavigate("settings")}>04 SETTINGS</p>
        </nav>

        <div className="calendar-profile">
          <p>TETTA ITO</p>
          <p>ADMIN</p>
        </div>
      </aside>

      <main className="calendar-content">
        <header className="calendar-topbar">
          <div>
            <p>CALENDAR</p>
            <h1>JUNE 2026</h1>
          </div>

          <div className="calendar-actions">
            <button>‹</button>
            <button>TODAY</button>
            <button>›</button>
          </div>
        </header>

        <section className="calendar-controls">
          <div className="calendar-date">
            <span>07</span>
            <div>
              <p>SUNDAY</p>
              <p>JUNE 2026</p>
            </div>
          </div>

          <div className="calendar-views">
            <button className="selected">WEEK</button>
            <button>MONTH</button>
            <button>DAY</button>
          </div>
        </section>

        <section className="calendar-grid">
          <div className="calendar-hours">
            {Array.from({ length: 14 }, (_, index) => {
              const hour = index + 8;
              return (
                <div className="calendar-hour" key={hour}>
                  {String(hour).padStart(2, "0")}:00
                </div>
              );
            })}
          </div>

          <div className="calendar-day">
            <div className="day-header">
              <span>SUN</span>
              <strong>07</strong>
            </div>

            <div className="calendar-slots">
              {Array.from({ length: 14 }, (_, index) => (
                <div className="calendar-slot" key={index} />
              ))}

              {events.map((event) => (
                <button
                  className={`calendar-event event-${event.type.toLowerCase()}`}
                  key={event.id}
                >
                  <span className="event-time">
                    {event.time} — {event.end}
                  </span>

                  <strong>{event.title}</strong>

                  <span className="event-meta">
                    {event.project} / {event.type}
                  </span>

                  <span className="event-status">
                    {event.status}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="calendar-bottom">
          <div className="calendar-summary">
            <p>DAY SUMMARY</p>
            <div className="summary-grid">
              <div>
                <span>EVENTS</span>
                <strong>03</strong>
              </div>

              <div>
                <span>BOOKED</span>
                <strong>05H</strong>
              </div>

              <div>
                <span>AVAILABLE</span>
                <strong>04H</strong>
              </div>

              <div>
                <span>BLOCKED</span>
                <strong>02H</strong>
              </div>
            </div>
          </div>

          <button className="new-event">
            + NEW EVENT
          </button>
        </section>
      </main>
    </div>
  );
}
