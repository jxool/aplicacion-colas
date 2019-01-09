// Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket')
socket.on('connect', function() {
    console.log('Conectado')
})

socket.on('disconnect', function() {
    console.log('Desconectado')
})

socket.on('estadoActual', function(data) {
    label.text(data.actual)
})

$('button').on('click', function() {
    socket.emit('nuevoTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    })
})