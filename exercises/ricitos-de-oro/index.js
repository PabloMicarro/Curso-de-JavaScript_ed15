const entrar = confirm(
  "Comprobemos si conoces el cuento de Ricitos de Oro, tu eres la protagonista y encuentras una casa en el bosque ¿quieres entrar en la casa?"
);

if (entrar === true) {
  const sopa = prompt(
    'Has entrado en la casa y sobre una mesa ves tres platos de sopa uno grande, uno mediano y otro pequeño \n¿Cual pruebas? \nEscribe tu respuesta en números siendo el grande "1" , el mediano "2" y el pequeño "3" '
  );

  if (sopa === "3") {
    const silla = prompt(
      'Muy bien! los otros platos no hubiesen estado a tu gusto, ves tres sillas y te apetece probarlas. \nHay una grande, una mediana y otra pequeña ¿En cuál te sientas? \nEscribe tu respuesta en números siendo la grande "1" , la mediana "2" y la pequeña "3" '
    );

    const cama = prompt(
      'Perfecto! Las otras dos sillas eran uy incómodas.\nAhora ves tres camas y te apetece dormir una grande, una mediana y otra pequeña \n¿En cuán te sientas? \nEscribe tu respuesta en números siendo la grande "1" , la mediana "2" y la pequeña "3" '
    );

    if (cama === "3") {
      const final = alert(
        "Veo que te sabes el cuento... Ahora llegarán los osos saldrás corriendo y aprenderás que nunca debe meterse uno en casas ajenas."
      );
    } else {
      const camaFin = alert(
        "Has elegido la cama incorrecta, busca el cuento en google"
      );
    }
  } else {
    const sopaFin = alert(
      "Has elegido el plato de sopa incorrecto, busca el cuento en google"
    );
  }
} else {
  const fin = alert("Veo que no quieres jugar... prueba otro día");
}
