let resultado;

        function calcular() {
            let num1 = Number(document.getElementById('numero1').value);
            let num2 = Number(document.getElementById('numero2').value);
            let operacion = document.getElementById('operacion').value;


            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    resultado = num1 / num2;
                    break;
            }
        }

        function mostrarResultado() {
            let resultadoFinal = document.getElementById('resultado');
            resultadoFinal.textContent = `Resultado: ${resultado}`;
        }
