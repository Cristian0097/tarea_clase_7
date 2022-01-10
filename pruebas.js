function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre('Cristian') === '',
        'Validar nombre no funciono con un nombre valido'
    )
}


probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar la provincia donde reside actualmente',
        'Validar ciudad no validó que el nombre no sea vacio'
    );

    console.assert(
        validarCiudad('Mendoza') === '',
        'Validar ciudad no funciono con un nombre de ciudad valido'
    )
}

probarValidarCiudad();

function probarValidarComportamiento() {
    console.assert(
        validarComportamiento('') === 'Debe seleccionar como ha sido su comportamiento este año',
        'Validar comportamiento no validó que el comportamiento no sea vacio'
    )

    console.assert(
        validarComportamiento('bueno') === '',
        'Validar comportamiento no funciono con un comportamiento valido'
    )
}

probarValidarComportamiento();

function probarValidarDescripciónRegalo() {
    console.assert(
        validarDescripcionRegalo('a') === 'Este campo debe contener al menos 2 caracteres',
        'Validar descripción regalo no valido que descripción regalo contenga mas de 2 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe contener menos de 50 caracteres',
        'Validar descripción regalo no validó que descripción regalo contenga menos de 50 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('Laptop') === '',
        'Validar descripcion regalo no funciono con un texto valido'
    )
}

probarValidarDescripciónRegalo()