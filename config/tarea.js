
module.exports.tarea = async function() {
    var Cron    =  require('./cron')
    Cron = Cron.cron;
    let cron      = new Cron()
    /////////////////////////////////////////////////////////////////////////////////////////////
    let tarea        = Object()
    const moment = require('moment');
    /////////////////////////////////////////////////////////////////////////////////////////////

    tarea        = new Object()
    tarea.nombre = "Reinicio Automatico 12 Horas"
    tarea.tiempo = 24
    tarea.unidad = "hora"
    tarea.log    = false
    tarea.accion = async function(){
        
        console.log("*******************Reinicio Sistema***************")
        cron.parar()
        process.exit(0)
        
    }
    //cron.AgregarTarea(tarea)

    
    tarea        = new Object()
    tarea.nombre = "Validador de dbs"
    tarea.tiempo = 2
    tarea.unidad = "minuto"
    tarea.log    = false
    tarea.accion = async function(){
        
        console.log("*******************Validando dbs***************")
        try {
            await Admin.findOne( {  });
        } catch (error) {
            process.exit(0)
        }
    }
//    cron.AgregarTarea(tarea)


    cron.iniciar()
}