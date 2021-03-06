import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./styles/Chart.module.scss";

const Chart = () => {
  const arr = Array(6)
    .fill()
    .map(() => Math.round(Math.random() * 300));
  console.log(arr);
  //const [data] = useState([300, 99, 44, 33, 44, 22]);
  const [data] = useState(arr);
  const svgRef = useRef();
  useEffect(() => {
    const w = 400;
    const h = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(6);

    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }, [data]);
  return (
    <div className={styles.chart}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Chart;
