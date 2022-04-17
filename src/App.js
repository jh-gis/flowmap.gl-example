import React, { Component } from "react";
import geoViewport from "@mapbox/geo-viewport";
import FlowMap, { LegendBox, LocationTotalsLegend } from "@flowmap.gl/react";
import "./App.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MapboxAccessToken;

const getInitialViewState = () => {
  const bbox = [-109.06, 36.99, -102.04, 41.0];
  const {
    center: [longitude, latitude],
    zoom,
  } = geoViewport.viewport(
    bbox,
    [window.innerWidth, window.innerHeight],
    undefined,
    undefined,
    512
  );
  return {
    longitude,
    latitude,
    zoom,
    bearing: 0,
    pitch: 0,
  };
};

const colors = {
  flows: {
    scheme: [
      // Teal scheme from https://carto.com/carto-colors/
      "#d1eeea",
      "#a8dbd9",
      "#85c4c9",
      "#68abb8",
      "#4f90a6",
      "#3b738f",
      "#2a5674",
    ],
    highlighted: [
      // Teal scheme from https://carto.com/carto-colors/
      "#d1eeea",
      "#a8dbd9",
      "#85c4c9",
      "#68abb8",
      "#4f90a6",
      "#3b738f",
      "#2a5674",
    ],
  },
  locationAreas: {
    outline: "rgba(92,112,128,0.5)",
    normal: "rgba(187,187,187,0.5)",
    selected: "rgba(217,130,43,0.5)",
  },
};

const DARK_COLORS = {
  darkMode: true,
  flows: {
    scheme: [
      "rgb(0, 22, 61)",
      "rgb(0, 27, 62)",
      "rgb(0, 36, 68)",
      "rgb(0, 48, 77)",
      "rgb(3, 65, 91)",
      "rgb(48, 87, 109)",
      "rgb(85, 115, 133)",
      "rgb(129, 149, 162)",
      "rgb(179, 191, 197)",
      "rgb(240, 240, 240)",
    ],
  },
  locationAreas: {
    normal: "#334",
  },
  outlineColor: "#000",
};

export default class App extends Component {
  state = {
    locations: null,
    flows: null,
    thickness: null,
  };

  componentDidMount() {
    fetch(
      `${process.env.PUBLIC_URL}/data/US_Counties_AND_Centroids_NoPR_5.5.json`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ locations: json }));

    fetch(`${process.env.PUBLIC_URL}/data/CO_Origin_flows.json`)
      .then((response) => response.json())
      .then((json) => this.setState({ flows: json }));
  }

  render() {
    const { flows, locations } = this.state;
    return (
      <>
        <FlowMap
          flows={flows}
          locations={locations}
          animate={true}
          pickable={true}
          colors={DARK_COLORS}
          getLocationId={(l) => l.properties.GEOID}
          getLocationCentroid={(l) => l.properties.Centroid}
          getFlowOriginId={(f) => f.origin}
          getFlowDestId={(f) => f.dest}
          getFlowMagnitude={(f) => f.count2010}
          initialViewState={getInitialViewState()}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
        <LegendBox
          bottom={35}
          left={10}
          style={{ backgroundColor: "#CCC", color: "#000" }}
        >
          <LocationTotalsLegend colors={DARK_COLORS} />
        </LegendBox>
      </>
    );
  }
}
