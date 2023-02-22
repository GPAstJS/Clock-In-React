import { useEffect, useState } from "react";
import "./App.css";

const data = new Date();

function App() {
  const [hora, setaHora] = useState(data.getHours());
  const [minuto, setaMinuto] = useState(data.getMinutes());
  const [segundo, setaSegundo] = useState(data.getSeconds());

  useEffect(() => {
    const clock = setInterval(() => {
      const data = new Date();

      setaHora(data.getHours());
      setaMinuto(data.getMinutes());
      setaSegundo(data.getSeconds());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <span style={{}} id="hours">
            {hora < 10 ? `0${hora}` : hora}
          </span>
          <span
            style={{
              fontSize: "20px",
            }}
            className="time"
          >
            Hours
          </span>
        </div>

        <div>
          <span id="minutes">{minuto < 10 ? `0${minuto}` : minuto}</span>
          <span
            style={{
              fontSize: "20px",
            }}
            className="time"
          >
            Minutos
          </span>
        </div>

        <div>
          <span id="seconds">{segundo < 10 ? `0${segundo}` : segundo}</span>
          <span
            style={{
              fontSize: "20px",
            }}
            className="time"
          >
            Seconds
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
