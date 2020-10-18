function play() {
  const endString = ", respuesta incorrecta... fin del juego";
  const enterQuestion = confirm(
    "Comprobemos si conoces el cuento de Ricitos de Oro, tu eres la protagonista y encuentras una casa en el bosque ¿quieres entrar en la casa?"
  );

  if (enterQuestion) {
    const soupQuestion = prompt(
      `Has entrado en la casa y te das cuenta de que tienes hambre. Sobre una mesa hay tres platos de sopa.\n¿Cual pruebas? ¿El "1", el "2" o el "3"?`
    );

    if (soupQuestion === "1") {
      alert(
        `El plato de sopa número 1 está demasiado caliente para ti${endString}`
      );
    } else if (soupQuestion === "2") {
      alert(
        `El plato de sopa número 2 está demasiado frío para ti${endString}`
      );
    } else if (soupQuestion === "3") {
      const chairQuestion = prompt(
        `¡Enhorabuena! Has elegido el plato de sopa correcto. \nAhora te encuentras ante tres sillas, una grande una mediana y otra pequeña. \n¿Cuál crees que es más cómoda para ti? ¿La "grande", la "mediana" o la "pequeña"?`
      );
      if (chairQuestion === "grande") {
        alert(
          `La silla que has elegido es demasiado grande para ti${endString}`
        );
      } else if (chairQuestion === "mediana") {
        alert(
          `La silla que has elegido es demasiado grande para ti${endString}`
        );
      } else if (chairQuestion === "pequeña") {
        const bedQuestion = prompt(
          `¡Perfecto! Esa silla es perfecta para ti. \nAhora te encuentras ante tres camas, una grande una mediana y otra pequeña. \n¿En cuál crees que dormirías mejor? ¿La "grande", la "mediana" o la "pequeña"?`
        );

        if (bedQuestion === "grande") {
          alert(
            `La cama que has elegido es demasiado dura para ti${endString}`
          );
        } else if (bedQuestion === "mediana") {
          alert(
            `La cama que has elegido es demasiado blanda para ti${endString}`
          );
        } else if (chairQuestion === "pequeña") {
          alert(
            `¡Enhorabuena! La cama es perfecta para ti. Te sabes el cuento a la perfección... Ahora llegarán los osos saldrás corriendo y aprenderás que nunca debe meterse uno en casas ajenas. `
          );
        }
      }
    }
  } else {
    alert(`Veo que no quieres jugar... prueba otro día`);
  }

  const playAgain = confirm(`¿Quieres jugar de nuevo?`);

  if (playAgain) {
    play();
  }
}

play();
