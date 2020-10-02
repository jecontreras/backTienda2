/**
 * Notificaciones.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo:{
      type: 'string'
    },
    foto: {
      type: 'string'
    },
    tipoDe:{
      type: 'integer',
      defaultsTo: 0 // 0 ventas // 1 retiros
    },
    admin:{
      type: 'integer',
      defaultsTo: 0
    },
    descripcion:{
      type: 'string'
    },
    venta:{
      model: 'tblventas'
    },
    view:{
      type: 'integer',
      defaultsTo: 0 // true 1 //false 0
    },
    user:{
      model: 'tblusuario'
    }

  },

};

