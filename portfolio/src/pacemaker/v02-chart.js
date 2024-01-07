import { useMemo, useState } from "react";
import { Chart } from "react-charts";
import { BiSolidSquareRounded, BiSquareRounded } from "react-icons/bi";

const getSeries = (data, selectedSerie) => {
  return data.map((el) => {
    const timeInSeconds =
      Math.trunc(Number(el.time)) * 60 + (Number(el.time) % 1) * 100;

    const speed =
      timeInSeconds > 0 ? (Number(el.distance) / timeInSeconds) * 3.6 : 0;

    return { speed: speed, value: Number(el[CHARTS_DATA[selectedSerie]]) };
  });
};

const CHARTS = ["Lactate", "Heart Beats", "Steps Frequency"];

const CHARTS_DATA = {
  [CHARTS[0]]: "lacticAcidValue",
  [CHARTS[1]]: "heartRate",
  [CHARTS[2]]: "stepFrequency",
};
const CHARTS_COLORS = {
  [CHARTS[0]]: "red",
  [CHARTS[1]]: "green",
  [CHARTS[2]]: "blue",
};

export const V02Chart = ({ data }) => {
  const [selected, setSelected] = useState(CHARTS[0]);

  const _data = useMemo(
    () => [
      {
        label: "Lactic Acid [mM]",
        data: getSeries(data, selected),
        color: "black", //CHARTS_COLORS[selected],
      },
    ],
    [data, selected]
  );

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.speed,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.value,
      },
    ],
    []
  );

  return (
    <div className="col-12">
      <div className="col-12 d-flex justify-content-center">
        {CHARTS.map((el) => {
          return (
            <div className="col-3" key={el} onClick={() => setSelected(el)}>
              {el === selected ? (
                <BiSolidSquareRounded scale={"10%"} fill={CHARTS_COLORS[el]} />
              ) : (
                <BiSquareRounded scale={"10%"} fill={CHARTS_COLORS[el]} />
              )}
              {el}
            </div>
          );
        })}
      </div>
      <div style={{ height: "75vh" }}>
        <Chart
          options={{
            data: _data,
            getSeriesStyle: () => {
              return { color: CHARTS_COLORS[selected] };
            },
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </div>
  );
};
