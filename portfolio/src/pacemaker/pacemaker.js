import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BiPlay, BiStop } from "react-icons/bi";
import "./pacer.css";

const audio = new Audio("./beep.wav");

export const Pacemaker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [id, setId] = useState(null);

  const lastBip = useRef(null);

  const [data, setData] = useState({
    minutes: 4,
    seconds: 0,
    distance: 10,
  });

  const handleSubmit = (e) => {
    if (e.preventDefault) e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;

    if (!isRunning) {
      const mSecondsToWait =
        ((data.minutes * 60 + data.seconds) / 1000) * data.distance * 1000;
      const _id = setInterval(interval, 50, mSecondsToWait);
      lastBip.current = new Date();
      setId(_id);
    } else {
      clearInterval(id);
    }
    setIsRunning(!isRunning);
  };

  const interval = (mSecondsToWait) => {
    const now = new Date();
    if (now - lastBip.current >= mSecondsToWait) {
      console.log("Bip after: ", now - lastBip.current);
      audio.play();
      lastBip.current = new Date();
    }
  };

  const validDistance =
    data.distance !== "" && data.distance <= 200 && data.distance >= 5;
  const validSeconds =
    data.seconds !== "" && data.seconds < 60 && data.seconds >= 0;
  const validMinutes =
    data.minutes !== "" && data.minutes > 1 && data.minutes < 8;

  return (
    <div className="full-size">
      <h2 className="proect-title text-white p-5"> Pacemaker </h2>
      <div className="col">
        <Form noValidate onSubmit={handleSubmit}>
          <div className="row m-5">
            <Form.Group className="mb-3">
              <Form.Label className="text-white">
                Pace (Minutes / Km)
              </Form.Label>
              <div className="row d-flex">
                <div className="col-6">
                  <Form.Label className="text-white">Minutes</Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    value={data.minutes}
                    onChange={(e) =>
                      setData({ ...data, minutes: e.target.value })
                    }
                    min={2}
                    max={7}
                    isValid={validMinutes}
                    isInvalid={!validMinutes}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Minutes must be between 2 and 8.
                  </Form.Control.Feedback>
                </div>
                <div className="col-6">
                  <Form.Label className="text-white">Seconds</Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    value={data.seconds}
                    onChange={(e) =>
                      setData({ ...data, seconds: e.target.value })
                    }
                    min={0}
                    max={59}
                    required
                    isValid={validSeconds}
                    isInvalid={!validSeconds}
                  />
                  <Form.Control.Feedback type="invalid">
                    Seconds must be between 0 and 60.
                  </Form.Control.Feedback>
                </div>
              </div>
            </Form.Group>
          </div>
          <div className="row m-5">
            <Form.Group className="mb-3">
              <Form.Label className="text-white">
                Distance between cones (meters)
              </Form.Label>
              <Form.Control
                name="distance"
                as="input"
                type="number"
                value={data.distance}
                min={0}
                max={200}
                step={1}
                onChange={(e) => setData({ ...data, distance: e.target.value })}
                isValid={validDistance}
                isInvalid={!validDistance}
              />
              <Form.Control.Feedback type="invalid">
                Distance must be between 5 and 200.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="row m-5">
            <div className="col">
              <Button
                type="submit"
                disabled={
                  !isRunning &&
                  (!validDistance || !validMinutes || !validSeconds)
                }
                variant={isRunning ? "danger" : "success"}
              >
                {isRunning ? <BiStop /> : <BiPlay />}
                {isRunning ? "Stop" : "Start"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
