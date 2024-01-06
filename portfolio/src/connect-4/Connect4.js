import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import gameWorker from "./gameWorker";
import { ReactComponent as Column } from "./img/column.svg";
import { ReactComponent as Red } from "./img/red.svg";
import { ReactComponent as Yellow } from "./img/yellow.svg";
import "./style.css";

export const COL_WIDTH = 60;
export const COL_HEIGHT = 340;
const gameEngine = new Worker(
  URL.createObjectURL(new Blob(["(" + gameWorker.toString() + ")()"]))
);

export const Connect4 = () => {
  const [loading, setLoading] = useState(false);
  const [gameState, setGameState] = useState();

  const messageHandler = (e) => {
    if (e.data.method === "get-state") {
      console.log("Game state received", e.data.result);
      setGameState(e.data.result);
    }
  };

  useEffect(() => {
    gameEngine.onmessage = messageHandler;
    gameEngine.postMessage({ method: "init" });
  }, []);

  return (
    <div>
      <div className="col-12 d-flex justify-content-center">
        <h2> Then i decided to reimplement it in js, because why not? </h2>
      </div>

      <div className="col-12 d-flex justify-content-center">
        <Button
          title="PLAY"
          color="primary"
          size="small"
          onClick={() => {
            gameEngine.postMessage({ method: "test-state" });
          }}
        >
          {"Play ?"}
        </Button>
        {loading ? <span> Thinking ... </span> : null}
      </div>
      {gameState ? (
        <div className="col-12 d-flex justify-content-center">
          <div className="board  col-6">
            <svg
              viewBox={`0 0 ${COL_WIDTH * 7 + 10} ${COL_HEIGHT}`}
              width="100%"
            >
              {Object.entries(gameState.board).map(([col, values]) => (
                <svg
                  onClick={() => {
                    if (!gameState.turn) {
                      gameEngine.postMessage({
                        method: "update-on-move",
                        column: col,
                      });
                    }
                  }}
                  key={"column_group_" + col}
                >
                  <g>
                    <Column
                      key={"column_svg" + col}
                      x={col * COL_WIDTH}
                      y={0}
                    />
                    {values
                      .filter((el) => el)
                      .map((el, index) => {
                        const y = [283, 227, 172, 115, 60, 5];
                        return el === "1" ? (
                          <Red
                            key={`col-${col}-${index}`}
                            x={col * COL_WIDTH + 8}
                            y={y[index]}
                          />
                        ) : (
                          <Yellow
                            key={`col-${col}-${index}`}
                            x={col * COL_WIDTH + 8}
                            y={y[index]}
                          />
                        );
                      })}
                  </g>
                </svg>
              ))}
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
};
