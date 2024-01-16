import React from "react";
import { useSelector } from "react-redux";

function Schedule() {
  const theme = useSelector((state) => state.theme.dark);
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>{lang ? <>Agenda</> : <>Schedule</>}</h1>
      <p className="top">
        {lang ? (
          <>
            Realizo 5 pinturas al mes; con lo cual estaré minteando más pinturas
            de forma mensual o trimestral.
          </>
        ) : (
          <>
            I make 5 paintings a month; with which I will be painting more
            paintings of monthly or quarterly.
          </>
        )}
      </p>
    </div>
  );
}

export default Schedule;
