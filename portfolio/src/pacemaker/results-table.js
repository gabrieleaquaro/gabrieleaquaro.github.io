import { useCallback, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiChart, BiExport, BiPlus, BiTrash, BiX } from "react-icons/bi";

const DATAPOINT = {
  distance: 1200,
  time: 0,
  lacticAcidValue: 0,
  heartRate: 0,
  stepFrequency: 0,
};

export const Results = ({ setChartData }) => {
  const [atheltes, setAthletes] = useState([0]);

  const deleteElement = (el) => {
    setAthletes((_old) => {
      const index = atheltes.findIndex((_el) => el === _el);
      _old.splice(index, 1);
      return [..._old];
    });
  };
  return (
    <>
      <Button
        onClick={() => setAthletes(atheltes.concat(atheltes.at(-1) ?? 0 + 1))}
      >
        <BiPlus /> Athelte
      </Button>
      {atheltes.map((el) => (
        <Result
          key={el}
          selfDelete={() => deleteElement(el)}
          setChartData={setChartData}
        />
      ))}
    </>
  );
};

export const Result = ({ selfDelete, setChartData }) => {
  const [name, setName] = useState("Mario Rossi");
  const [data, setData] = useState([]);

  const { _export } = useExport();

  return (
    <div className="col p-5">
      <Table variant="light" bordered className="mb-2">
        <thead>
          <tr>
            <th>
              <Button
                size="sm"
                variant="danger"
                title="Delete Athlete"
                onClick={selfDelete}
                className="me-2"
              >
                <BiX />
              </Button>
              <Button
                size="sm"
                className="me-2"
                title="Export Data"
                onClick={() => {
                  _export(data, name);
                }}
              >
                <BiExport />
              </Button>
              <Button
                title="Show Chart"
                size="sm"
                onClick={() => setChartData(data)}
              >
                <BiChart />
              </Button>
            </th>
            <th>Athelte</th>
            <EditableRow onChange={(e) => setName(e.target.value)}>
              {name}
            </EditableRow>
          </tr>
        </thead>
      </Table>
      <Table variant="light" bordered hover>
        <thead>
          <tr>
            <th>
              # Rep
              <Button
                size="sm"
                variant="success"
                className="mx-2"
                onClick={() =>
                  setData((old) => {
                    return old.concat({ ...DATAPOINT });
                  })
                }
              >
                <BiPlus />
              </Button>
            </th>
            <th>Distance [m]</th>
            <th>Time</th>
            <th>Lactic Acid Value [mM/l]</th>
            <th>Heart Rate [bpm]</th>
            <th>Frequency</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <EditableRow
                  type="number"
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["distance"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["distance"]}
                </EditableRow>
                <EditableRow
                  type="number"
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["time"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["time"]}
                </EditableRow>
                <EditableRow
                  type="number"
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["lacticAcidValue"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["lacticAcidValue"]}
                </EditableRow>
                <EditableRow
                  type="number"
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["heartRate"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["heartRate"]}
                </EditableRow>
                <EditableRow
                  type="number"
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["stepFrequency"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["stepFrequency"]}
                </EditableRow>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setData((_old) => {
                        _old.splice(index, 1);
                        return [..._old];
                      });
                    }}
                  >
                    <BiTrash> </BiTrash>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const EditableRow = ({ children, onChange, type = "text" }) => {
  const [inEdit, setInEdit] = useState(false);

  const toggleEdit = useCallback(() => {
    setInEdit(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", toggleEdit);
    return () => {
      document.removeEventListener("click", toggleEdit);
    };
  }, [toggleEdit]);

  return (
    <td
      onClick={(e) => {
        e.stopPropagation();
        setInEdit(true);
      }}
    >
      {!inEdit ? (
        children ?? ""
      ) : (
        <Form.Control
          as="input"
          value={children ?? ""}
          type={type}
          onChange={onChange}
        />
      )}
    </td>
  );
};

const useExport = () => {
  const _export = (data, title = "data") => {
    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      data.map((e) => Object.values(e).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
  };
  return { _export };
};
