let listaNombresGastos = [];
let listaValoresGastos = [];
let descripcion = [];
let modificacion = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);
    let describir = document.getElementById('descripcion').value;

    if (valorGasto > 150) {
        alert('¡¡¡Tienes un Gasto Mayor a $150.!!!');
    }

    if (modificacion === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        descripcion.push(describir);
    } else {
        listaNombresGastos[modificacion] = nombreGasto;
        listaValoresGastos[modificacion] = valorGasto;
        descripcion[modificacion] = describir;
        modificacion = -1;
    }

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    console.log(descripcion);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const razonar = descripcion[posicion];

        // Aplicar estilo rojo a los valores de gasto mayores a 150
        let estilo = '';
        if (valorGasto > 150) {
            estilo = 'color: red;'; // Establecer color rojo para valores mayores a 150
        }

        htmlLista += `<li style="${estilo}">
            ${elemento} - MXN ${valorGasto.toFixed(2)} - Razon: ${razonar}
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            <button onclick="modificarGasto(${posicion});">Modificar</button>
            </li>`;

        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcion').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    descripcion.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcion').value = descripcion[posicion];
    modificacion = posicion;
}