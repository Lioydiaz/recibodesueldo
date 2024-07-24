const valoresHora = {
    1: 53.27, // Oficial Especializado
    2: 45.39, // Oficial
    3: 41.85, // Medio Oficial
    4: 38.42  // Ayudante
};

const calcularRemuneracion = () => {
    const categoria = document.getElementById('categoria').value;
    const horasNormales = parseFloat(document.getElementById('horasNormales').value) || 0;
    const horas50 = parseFloat(document.getElementById('horas50').value) || 0;
    const horas100 = parseFloat(document.getElementById('horas100').value) || 0;
    const porcentajeJubilacion = parseFloat(document.getElementById('porcentajeJubilacion').value) / 100 || 0;
    const porcentajeObraSocial = parseFloat(document.getElementById('porcentajeObraSocial').value) / 100 || 0;
    const porcentajeLey23032 = parseFloat(document.getElementById('porcentajeLey23032').value) / 100 || 0;
    const asignacionFamiliar = parseFloat(document.getElementById('asignacionFamiliar').value) || 0;

    const valorHora = valoresHora[categoria];
    const remuHorasNormales = valorHora * horasNormales;
    const remuHoras50 = valorHora * 1.5 * horas50;
    const remuHoras100 = valorHora * 2 * horas100;
    const totalRemunerativo = remuHorasNormales + remuHoras50 + remuHoras100;

    const descuentoJubilacion = totalRemunerativo * porcentajeJubilacion;
    const descuentoObraSocial = totalRemunerativo * porcentajeObraSocial;
    const descuentoLey23032 = totalRemunerativo * porcentajeLey23032;

    const totalDescuentos = descuentoJubilacion + descuentoObraSocial + descuentoLey23032;
    const totalNoRemunerativo = asignacionFamiliar;
    const totalAPercibir = totalRemunerativo - totalDescuentos + totalNoRemunerativo;

    document.getElementById('remuHorasNormales').innerText = `$${remuHorasNormales.toFixed(2)}`;
    document.getElementById('remuHoras50').innerText = `$${remuHoras50.toFixed(2)}`;
    document.getElementById('remuHoras100').innerText = `$${remuHoras100.toFixed(2)}`;
    document.getElementById('descuentoJubilacion').innerText = `$${descuentoJubilacion.toFixed(2)}`;
    document.getElementById('descuentoObraSocial').innerText = `$${descuentoObraSocial.toFixed(2)}`;
    document.getElementById('descuentoLey23032').innerText = `$${descuentoLey23032.toFixed(2)}`;
    document.getElementById('noRemunerativo').innerText = `$${totalNoRemunerativo.toFixed(2)}`;
    document.getElementById('subtotalRemunerativo').innerText = `$${totalRemunerativo.toFixed(2)}`;
    document.getElementById('subtotalDescuento').innerText = `$${totalDescuentos.toFixed(2)}`;
    document.getElementById('subtotalNoRemunerativo').innerText = `$${totalNoRemunerativo.toFixed(2)}`;
    document.getElementById('totalPercibir').innerText = `$${totalAPercibir.toFixed(2)}`;
};

const imprimirRecibo = () => {
    window.print();
};

document.getElementById('categoria').addEventListener('change', (e) => {
    const valorHora = valoresHora[e.target.value];
    document.getElementById('valorHora').value = `$${valorHora}`;
    calcularRemuneracion();
});

document.getElementById('horasNormales').addEventListener('input', calcularRemuneracion);
document.getElementById('horas50').addEventListener('input', calcularRemuneracion);
document.getElementById('horas100').addEventListener('input', calcularRemuneracion);
document.getElementById('porcentajeJubilacion').addEventListener('input', calcularRemuneracion);
document.getElementById('porcentajeObraSocial').addEventListener('input', calcularRemuneracion);
document.getElementById('porcentajeLey23032').addEventListener('input', calcularRemuneracion);
document.getElementById('asignacionFamiliar').addEventListener('input', calcularRemuneracion);
