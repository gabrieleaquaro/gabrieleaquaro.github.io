import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Pacemaker } from "./pacemaker";
import { Results } from "./results-table";
import { V02Chart } from "./v02-chart";

export const PacemakerMain = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    document.title = "V02 Max Pacemaker";
  });
  return (
    <div className="full-size">
      <h1 className="title primary-color p-5"> V02 Max Test Tool</h1>
      <Pacemaker />
      <Results setChartData={setChartData} />
      <Modal
        size="xl"
        show={chartData ? true : false}
        onHide={() => setChartData(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>V02 Max Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {chartData && chartData.length ? (
            <V02Chart data={chartData} />
          ) : (
            "No data present, please fill the table and retry!"
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
