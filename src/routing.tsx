import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SearchFlights, ListFlights, Result } from "./pages";

const getRoutes = () => {
  const root = "";
  const listFlights = `${root}/list-flight`;
  const result = `${root}/result`;

  return {
    root,
    listFlights,
    result,
  };
};

export const routes = getRoutes();

const Routing: FC = () => {
  return (
    <Routes>
      <Route path={routes.root} Component={SearchFlights} />
      <Route path={routes.listFlights} Component={ListFlights} />
      <Route path={routes.result} Component={Result} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
