// Obtém a data/hora atual
var data = new Date()

// Guarda cada pedaço em uma variável
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano4 = data.getFullYear(); // 4 dígitos
var hora = data.getHours(); // 0-23
var min = data.getMinutes(); // 0-59
var seg = data.getSeconds(); // 0-59
var tz = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes + 1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

export let date = str_data + ' às ' + str_hora