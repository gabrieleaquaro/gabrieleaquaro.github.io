import { useCallback, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiExport, BiPlus, BiTrash } from "react-icons/bi";

export const Results = () => {
  const [atheltes, setAthletes] = useState([0]);

  return (
    <>
      <Button onClick={() => setAthletes(atheltes.concat(atheltes.length))}>
        Add Athelte
      </Button>
      {atheltes.map((el) => (
        <Result key={el} />
      ))}
    </>
  );
};

export const Result = () => {
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
                onClick={() => {
                  _export(data, name);
                }}
              >
                <BiExport />
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
                    return old.concat({ distance: "", time: "" });
                  })
                }
              >
                <BiPlus />
              </Button>
            </th>
            <th>Distance [m]</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <EditableRow
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
                  onChange={(e) =>
                    setData((_old_data) => {
                      _old_data[index]["time"] = e.target.value;
                      return [..._old_data];
                    })
                  }
                >
                  {el["time"]}
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

const EditableRow = ({ children, onChange }) => {
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
        <Form.Control value={children ?? ""} onChange={onChange} />
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
