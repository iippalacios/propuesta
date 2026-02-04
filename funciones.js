function verificarTodo() {
    const inputs = document.querySelectorAll('.respuesta');
    const errorGeneral = document.getElementById('error-general');
    let todasCorrectas = true;

    inputs.forEach(input => {
        const respuestaCorrecta = input.getAttribute('data-correcta').toLowerCase();
        const respuestaEscrita = input.value.toLowerCase().trim();
        const feedback = input.nextElementSibling; // El <span> debajo del input

        if (respuestaEscrita === respuestaCorrecta) {
            input.classList.remove('incorrecto');
            input.classList.add('correcto');
            feedback.style.color = "#2ed573";
        } else {
            input.classList.remove('correcto');
            input.classList.add('incorrecto');
            feedback.style.color = "#ff4757";
            todasCorrectas = false;
        }
    });

    if (todasCorrectas) {
        // Si todo está bien, esperamos un segundo para que vea los checks verdes y redirigimos
        errorGeneral.style.color = "#2ed573";
        errorGeneral.innerText = "¡TODO PERFECTO!";

        setTimeout(() => {
            window.location.href = "transicion.html";
        }, 1500);

    } else {
        errorGeneral.innerText = "AÚN HAY RESPUESTAS INCORRESCTAS O VACÍAS";

    }
}