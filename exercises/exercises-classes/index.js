/*
Clase constructora para un coche a la que se le puedan pasar los parámetros: Marca, modelo, velocidad máxima y color.
Función de aceleración que nunca pueda superar la velocidad máxima.
Función de frenado que nunca reduzca la velocidad por debajo de 0.
Función de parado del coche.
Función que devuelva true o false en función de si el coche está en marcha.
*/

class Car {
  constructor(brand, model, topSpeed, color) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.topSpeed = topSpeed;
    this.color = color;
  }

  get status() {
    return `The ${this.color} ${this.brand} ${this.model} is running on ${this.speed} km/h but its top speed is ${this.topSpeed}`;
  }

  accelerate(amount) {
    if (this.speed + amount > this.topSpeed) {
      this.speed = this.topSpeed;
    } else {
      this.speed += amount;
    }
  }

  break(amount) {
    if (this.speed - amount < 0) {
      this.speed = 0;
    } else {
      this.speed -= amount;
    }
  }

  stop() {
    // this.speed = 0;
    this.break(this.speed);
  }

  isRunning() {
    return this.speed > 0;
  }
}

const ferrari = new Car("Ferrari", "Testarrosa", 220, "red");

/*
Crea una clase TV con las propiedades: brand, channel y volumen
CAnal por defecto es el 1
Volumen por defecto es 50
Incluye métodos para subir y bajar el volumen
EL volumne no puede estar por encima de 100 ni por debajo de 0
Inclute metodo para cambiar de canal
La tv solo tiene 50 canales, si intentas cambiart al 60 te queda sen el que estás
Añade método para restablecer tv  canal 1 volumen 50
Incluye status : modelo en el canal x al volumen x
*/

/*
class TV {
    constructor(brand) {
      this.brand = brand;
      this.channel = 1;
      this.volume = 50;
    }
  
    changeChannel(channel) {
      if (channel > 50) {
        this.channel = this.channel;
      } else {
        this.channel = channel;
      }
    }
  
    increaseVolume(volume) {
      if (this.volume + volume > 100) {
        this.volume = 100;
      } else {
        this.volume += volume;
      }
    }
  
    decreaseVolume(volume) {
      if (this.volume - volume < 0) {
        this.volume = 0;
      } else {
        this.volume -= volume;
      }
    }
  
    reset() {
      this.volume = 50;
      this.channel = 1;
    }
  
    get status() {
      return `La tv ${this.brand} está en el canal ${this.channel} en el volumen ${this.volume}`;
    }
  }
  */
/*
  REFACTORIZADO:
  */

class TV {
  static defaultValues = {
    channel: 1,
    volume: 50,
  };

  static toString() {
    console.log("Soy una tele");
  }

  constructor(brand) {
    this._maxChannel = 50;
    this._maxVolume = 100;
    this._minVolume = 0;
    this.brand = brand;
    this.channel = TV.defaultValues.channel;
    this.volume = TV.defaultValues.volume;
  }

  changeChannel(channel) {
    if (channel > this._maxChannel) {
      this.channel = this.channel;
    } else {
      this.channel = channel;
    }
  }

  increaseVolume(volume) {
    if (this.volume + volume > this._maxVolume) {
      this.volume = this._maxVolume;
    } else {
      this.volume += volume;
    }
  }

  decreaseVolume(volume) {
    if (this.volume - volume < this._minVolume) {
      this.volume = this._minVolume;
    } else {
      this.volume -= volume;
    }
  }

  reset() {
    this.volume = TV.defaultValues.volume;
    this.channel = TV.defaultValues.channel;
  }

  get status() {
    return `La tv ${this.brand} está en el canal ${this.channel} en el volumen ${this.volume}`;
  }
}

/* EJEMPLO HERENCIA DE CLASES, hay que tener cuidado */
class Person {
  constructor(firstname, lastname, age, gender, interests) {
    this.fullName = { firstname, lastname };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hola soy ${this.fullName.firstname}`);
  }
}

class Teacher extends Person {
  constructor(firstname, lastname, age, gender, interests, subject) {
    super(firstname, lastname, age, gender, interests);
    this.subject = subject;
  }

  greeting() {
    console.log(
      `Hola soy el profesor ${this.fullName.firstname} e imparto ${this.subject}`
    );
  }
}

/*
Marcador de puntuaciones más altas de un jugador en base a una clase

Administar la lista de puntuación más alta de un jugador

Debes construir un componente de puntuaciones más altas del juego Frogger.

Escribe métodos que devuelvan la puntuación más alta, la última agrergada y las tres más altas

las puntuaciones que queden bonitas

Máximo de puntuaciones 10, si se agrega una más se elimina la más antigua

Se puede grabar una puntuación para conservalra
*/

const descending = (a, b) => b - a;

class HighScore {
  constuctor(scores = []) {
    this.scores = scores;
    this.saved = null;
  }

  addScore(score, save = false) {
    if (typeof score !== number) {
      throw new Error(
        `Parámetro inválido, score debe ser un número, mandaste: ${score}`
      );
    }

    if (this.scores.lenght === 10) {
      this.scores.shift();
    }

    if (save) {
      this.saved = score;
    }

    this.scores.push(score);
  }

  bestScore() {
    return Math.max(...this.scores);
  }

  bestThreeScores() {
    return [...this.scores].sort(descending).slice(0, 3);
  }

  lastScore() {
    return this.scores[this.scores.lenght - 1];
  }

  toString() {
    return this.scores.map((score) => `- ${score}`).join("\n");
  }
}

/*
# D&D PJ

- strength
- dexterity
- constitution
- intelligence
- wisdom
- charisma

- hitpoint = 10 + constitutionModifier
- constitutionModifier = Round.floor((constitution - 10) / 2=

```js
{
  strength;
  dexterity;
  constitution;
  intelligence;
  wisdom;
  charisma;
  hitpoint;
}
```

Ejemplo de generacion:

Tiramos 4 veces el dado de 6 caras:

- 5,3,1,6: descartamos el 1 y sumamos 5 + 3 + 6 = 15 y asignamos a strength;
- 3, 2, 5, 3: descartamos el 2 y sumamos 3 + 5 + 3 = 11, asignamos a dexterity
- 1,1,1,1: descartamos el 1 y sumamos 1 + 1 + 1 = 3, asignamos a constitution
- 2, 1, 6, 6: descartamos el 1 y sumamos 2 + 6 + 6 = 14, asignamos a intelligence
- 3, 5, 3, 4: descartamos el 3 y sumamos 5 + 3+ 4 = 12 y asignamos a wisdom
- 6, 6, 6, 6: descartamos el 6 y sumamos 6 + 6 + 6 = 18 y asignamos a charisma

- como constitution es 3, constitutionModifier es -4 entonces los hitpoints son 6
*/

const skillModifier = (constitution) => Math.floor((constitution - 10) / 2);

class Character {
  static rollSkill() {
    return [0, 0, 0, 0]
      .map(() => Math.floor(Math.random() * 6) + 1)
      .sort()
      .slice(1)
      .reduce((acc, i) => acc + i, 0);
  }

  constructor() {
    this.strength = Character.rollSkill();
    this.dexterity = Character.rollSkill();
    this.constitution = Character.rollSkill();
    this.intelligence = Character.rollSkill();
    this.wisdom = Character.rollSkill();
    this.charisma = Character.rollSkill();
    this.hitpoint = 10 - skillModifier(this.constitution);
  }
}

// const pj = new Character()
