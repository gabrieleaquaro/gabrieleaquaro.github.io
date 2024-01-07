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
        ((Number(data.minutes) * 60 + Number(data.seconds)) / 1000) *
        Number(data.distance) *
        1000;
      const _id = setInterval(interval, 10, mSecondsToWait);
      setId(_id);
    } else {
      lastBip.current = null;
      clearInterval(id);
    }
    setIsRunning(!isRunning);
  };

  const interval = (mSecondsToWait) => {
    const now = new Date();
    if (!lastBip.current || now - lastBip.current >= mSecondsToWait) {
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
    <div>
      <div className="text-white col-3">
        <h3>Pacemaker</h3>
      </div>
      <div className="col m-5 text-white border border-white">
        <div className="py-3">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="col-8 my-1">
              <Form.Group>
                <div className="row">
                  <div className="col-6">
                    <Form.Label>Minutes</Form.Label>
                  </div>
                  <div className="col-6">
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
                </div>
              </Form.Group>
            </div>
            <div className="col-8 my-1">
              <Form.Group>
                <div className="row">
                  <div className="col-6">
                    <Form.Label>Seconds</Form.Label>
                  </div>
                  <div className="col-6">
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
            <div className="col-8 my-1">
              <Form.Group>
                <div className="row">
                  <div className="col-6">
                    <Form.Label>Distance between cones (meters)</Form.Label>
                  </div>
                  <div className="col-6">
                    <Form.Control
                      name="distance"
                      as="input"
                      type="number"
                      value={data.distance}
                      min={0}
                      max={200}
                      step={1}
                      onChange={(e) =>
                        setData({ ...data, distance: e.target.value })
                      }
                      isValid={validDistance}
                      isInvalid={!validDistance}
                    />
                    <Form.Control.Feedback type="invalid">
                      Distance must be between 5 and 200.
                    </Form.Control.Feedback>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="row mx-5">
              <div className="col d-flex justify-content-end">
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
    </div>
  );
};
