const $form = document.querySelector("#carta-a-santa")

$form.submit.onclick = function () {


    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const comportamiento = $form.comportamiento.value
    const descripcionRegalo = $form['descripcion-regalo'].value

    if (nombre.length + ciudad.length + comportamiento.length + descripcionRegalo.length === 0) {
        alert('No ha ingresado ningún dato')
    }
    else {
        validarNombre(nombre)
        validarCiudad(ciudad)
        validarComportamiento(comportamiento)
        validarDescripcionRegalo(descripcionRegalo)
    }
    return false
}

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }


    return ''

}

function validarCiudad(ciudad) {
    if (ciudad === '') {

        return 'Debe seleccionar la provincia donde reside actualmente'
    }

    return ''
}

function validarComportamiento(comportamiento) {
    if (comportamiento === '') {

        return 'Debe seleccionar como ha sido su comportamiento este año'
    }

    return ''
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length <= 1) {

        return 'Este campo debe contener al menos 2 caracteres'
    }

    if (descripcionRegalo.length >= 50) {

        return 'Este campo debe contener menos de 50 caracteres'
    }

    return ''
}