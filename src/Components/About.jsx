import React from "react";
import { useSelector } from "react-redux";
import aboutImage from "../assets/dp-profile.jpeg";

function About() {
  const theme = useSelector((state) => state.theme.dark);
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>{lang ? <>Acerca</> : <>About</>}</h1>
      <div className="contact-image">
        <img src={aboutImage} className="top" alt="" />
      </div>
      <p className="top">
        {lang ? (
          <>
            Realizo mis pinturas a través de la técnica “action-painting”, cuyo
            resultado son las pinturas abstractas.
            <br />
            <br />
            "Action-painting" es una técnica de pintura, en donde la pintura
            surgue de forma expontánia y enérgica, en lugar de aplicarse con
            cuidado, sin un esquema prefijado. Tampoco intenta ser una
            reprodución de la realidad.
            <br />
            <br />
            Siempre utilizo tempera sobre papel blanco; y solo 4 colores: negro,
            azul, rojo, verde. No utilizo inteligencia artificial. El tamaño
            real de todas las pinturas es de A4: 30 cms alto x 20 cms ancho.
            <br />
            <br />
          </>
        ) : (
          <>
            I make my paintings through the "action-painting” technique, whose
            result is abstract paintings.
            <br />
            <br />
            The "action-paintings" is a style of painting in which paint is
            spontaneously dribbled, splashed or smeared onto the canvas, rather
            than being carefully and without predetermined scheme or
            reproduction of reality.
            <br />
            <br />
            I always use tempera on white paper; and only 4 colors: black, blue,
            red and green. I do not use artificial intelligence. The actual size
            of all paintings is A4: 30 cm high x 20 cm wide.
            <br />
            <br />
          </>
        )}
      </p>
    </div>
  );
}

export default About;
