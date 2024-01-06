import { COL_WIDTH } from "./Connect4";

export const Column = ({ col, values }) => {
  console.log(col);

  return (
    <svg x={COL_WIDTH * col} y={0} key={`col-${col}`}>
      <rect
        style={{
          fill: "#207cad",
          stroke: "#207cad",
          strokeWidth: "0.567317",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        x="6.2932487"
        y="2.5178249"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="142.74611"
        r="26.458334"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="87.183617"
        r="26.458334"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="309.43362"
        r="26.458334"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="253.87111"
        r="26.458334"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="198.30861"
        r="26.458334"
      />
      <circle
        style={{
          fill: "#ffffff",
          stroke: "#207cad",
          strokeWidth: 0.565565,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        cx="35.396542"
        cy="31.62112"
        r="26.458334"
      />
    </svg>
  );
};
