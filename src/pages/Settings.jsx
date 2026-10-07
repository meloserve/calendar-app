import "../styles/Settings.css";

export default function Settings({ onNavigate }) {
  return (
    <div className="settings-page">

      {/* SIDEBAR */}
      <aside className="settings-sidebar">
        <div>
          <h2>WORKS DIGITAL</h2>
          <p>CALENDAR OS</p>
        </div>

        <nav>
          <p onClick={() => onNavigate("dashboard")}>
            01 DASHBOARD
          </p>

          <p onClick={() => onNavigate("calendar")}>
            02 CALENDAR
          </p>

          <p onClick={() => onNavigate("capacity")}>
            03 CAPACITY
          </p>

          <p className="active">
            04 SETTINGS
          </p>
        </nav>

        <div className="settings-profile">
          <p>TETTA ITO</p>
          <p>ADMIN</p>
        </div>
      </aside>


      {/* CONTENT */}
      <main className="settings-content">

        {/* HEADER */}
        <header className="settings-header">
          <div>
            <p>SETTINGS</p>
            <h1>SYSTEM</h1>
          </div>

          <div className="settings-version">
            <span>VERSION</span>
            <strong>01.00</strong>
          </div>
        </header>


        {/* ACCOUNT */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>01</p>
            <h2>ACCOUNT</h2>
          </div>

          <div className="settings-fields">

            <div className="settings-field">
              <label>NAME</label>
              <input
                type="text"
                defaultValue="TETTA ITO"
              />
            </div>

            <div className="settings-field">
              <label>ROLE</label>
              <input
                type="text"
                defaultValue="ADMIN"
              />
            </div>

            <div className="settings-field">
              <label>EMAIL</label>
              <input
                type="email"
                defaultValue="hello@worksdigital.jp"
              />
            </div>

          </div>

        </section>


        {/* WORKSPACE */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>02</p>
            <h2>WORKSPACE</h2>
          </div>

          <div className="settings-fields">

            <div className="settings-field">
              <label>WORKSPACE NAME</label>
              <input
                type="text"
                defaultValue="WORKS DIGITAL"
              />
            </div>

            <div className="settings-field">
              <label>TIMEZONE</label>
              <select defaultValue="Asia/Tokyo">
                <option value="Asia/Tokyo">
                  ASIA / TOKYO
                </option>
                <option value="America/New_York">
                  AMERICA / NEW YORK
                </option>
                <option value="Europe/London">
                  EUROPE / LONDON
                </option>
              </select>
            </div>

            <div className="settings-field">
              <label>WEEK START</label>
              <select defaultValue="monday">
                <option value="monday">MONDAY</option>
                <option value="sunday">SUNDAY</option>
              </select>
            </div>

          </div>

        </section>


        {/* WORKING HOURS */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>03</p>
            <h2>WORKING HOURS</h2>
          </div>

          <div className="settings-fields settings-fields-4">

            <div className="settings-field">
              <label>START</label>
              <input
                type="time"
                defaultValue="08:00"
              />
            </div>

            <div className="settings-field">
              <label>END</label>
              <input
                type="time"
                defaultValue="18:00"
              />
            </div>

            <div className="settings-field">
              <label>BREAK START</label>
              <input
                type="time"
                defaultValue="12:00"
              />
            </div>

            <div className="settings-field">
              <label>BREAK END</label>
              <input
                type="time"
                defaultValue="13:00"
              />
            </div>

          </div>

          <div className="settings-inline-info">
            <span>WEEKLY CAPACITY</span>
            <strong>41H</strong>
          </div>

        </section>


        {/* CALENDAR */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>04</p>
            <h2>CALENDAR</h2>
          </div>

          <div className="settings-option-list">

            <div className="settings-option">
              <div>
                <strong>DEFAULT VIEW</strong>
                <span>Initial calendar display</span>
              </div>

              <select defaultValue="week">
                <option value="week">WEEK</option>
                <option value="month">MONTH</option>
                <option value="day">DAY</option>
              </select>
            </div>

            <div className="settings-option">
              <div>
                <strong>WORKING CALENDAR</strong>
                <span>Primary calendar for capacity</span>
              </div>

              <select defaultValue="works">
                <option value="works">
                  WORKS DIGITAL
                </option>
                <option value="personal">
                  PERSONAL
                </option>
              </select>
            </div>

          </div>

        </section>


        {/* BOOKING */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>05</p>
            <h2>BOOKING</h2>
          </div>

          <div className="settings-option-list">

            <div className="settings-option">
              <div>
                <strong>OFFICE BOOKING</strong>
                <span>Allow external office reservations</span>
              </div>

              <button className="toggle active">
                ON
              </button>
            </div>

            <div className="settings-option">
              <div>
                <strong>INTERVIEW BOOKING</strong>
                <span>Allow external interview requests</span>
              </div>

              <button className="toggle active">
                ON
              </button>
            </div>

            <div className="settings-option">
              <div>
                <strong>BUFFER TIME</strong>
                <span>Time between external bookings</span>
              </div>

              <select defaultValue="30">
                <option value="0">NONE</option>
                <option value="15">15 MIN</option>
                <option value="30">30 MIN</option>
                <option value="60">60 MIN</option>
              </select>
            </div>

          </div>

        </section>


        {/* NOTIFICATIONS */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>06</p>
            <h2>NOTIFICATIONS</h2>
          </div>

          <div className="settings-option-list">

            <div className="settings-option">
              <div>
                <strong>CALENDAR</strong>
                <span>Calendar event notifications</span>
              </div>

              <button className="toggle active">
                ON
              </button>
            </div>

            <div className="settings-option">
              <div>
                <strong>BOOKING</strong>
                <span>New booking notifications</span>
              </div>

              <button className="toggle active">
                ON
              </button>
            </div>

            <div className="settings-option">
              <div>
                <strong>EMAIL</strong>
                <span>System email notifications</span>
              </div>

              <button className="toggle">
                OFF
              </button>
            </div>

          </div>

        </section>


        {/* INTEGRATIONS */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>07</p>
            <h2>INTEGRATIONS</h2>
          </div>

          <div className="integration-grid">

            <div className="integration-item">
              <div>
                <strong>GOOGLE CALENDAR</strong>
                <span>Calendar synchronization</span>
              </div>

              <button>
                CONNECT
              </button>
            </div>

            <div className="integration-item">
              <div>
                <strong>GOOGLE MEET</strong>
                <span>Automatic meeting links</span>
              </div>

              <button>
                CONNECT
              </button>
            </div>

            <div className="integration-item">
              <div>
                <strong>SLACK</strong>
                <span>Workspace notifications</span>
              </div>

              <button>
                CONNECT
              </button>
            </div>

          </div>

        </section>


        {/* APPEARANCE */}
        <section className="settings-section">

          <div className="settings-section-header">
            <p>08</p>
            <h2>APPEARANCE</h2>
          </div>

          <div className="settings-option-list">

            <div className="settings-option">
              <div>
                <strong>THEME</strong>
                <span>Interface appearance</span>
              </div>

              <select defaultValue="light">
                <option value="light">LIGHT</option>
                <option value="dark">DARK</option>
                <option value="system">SYSTEM</option>
              </select>
            </div>

            <div className="settings-option">
              <div>
                <strong>CUSTOM CURSOR</strong>
                <span>WORKS DIGITAL pointer system</span>
              </div>

              <button className="toggle active">
                ON
              </button>
            </div>

          </div>

        </section>


        {/* SYSTEM */}
        <section className="settings-section settings-system">

          <div className="settings-section-header">
            <p>09</p>
            <h2>SYSTEM</h2>
          </div>

          <div className="system-info">

            <div>
              <span>APP VERSION</span>
              <strong>01.00</strong>
            </div>

            <div>
              <span>ENVIRONMENT</span>
              <strong>PRODUCTION</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>OPERATIONAL</strong>
            </div>

          </div>

        </section>


        {/* SAVE */}
        <footer className="settings-footer">

          <p>
            SETTINGS ARE CURRENTLY LOCAL
          </p>

          <button className="save-settings">
            SAVE CHANGES
          </button>

        </footer>

      </main>
    </div>
  );
}
