export default function senhaValida(p: string) {
  var retorno = false;

  var letrasMaiusculas = /[A-Z]/;

  var letrasMinusculas = /[a-z]/;

  var numeros = /[0-9]/;

  var caracteresEspeciais = /\W|_/;

  var auxMaiuscula = 0;

  var auxMinuscula = 0;

  var auxNumero = 0;

  var auxEspecial = 0;

  if (p.length >= 3) {
    for (var i = 0; i < p.length; i++) {
      if (letrasMaiusculas.test(p[i])) auxMaiuscula++;
      else if (letrasMinusculas.test(p[i])) auxMinuscula++;
      else if (numeros.test(p[i])) auxNumero++;
      else if (caracteresEspeciais.test(p[i])) auxEspecial++;
    }

    if (auxMaiuscula > 0) {
      if (auxMinuscula > 0) {
        if (auxNumero > 0) {
          if (auxEspecial) {
            retorno = true;
          }
        }
      }
    }

    return retorno;
  } else {
    return retorno;
  }
}