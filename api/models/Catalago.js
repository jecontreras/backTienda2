/**
 * Catalago.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo:{
      type: 'string'
    },
    estado:{
      type: 'integer' // 0 activo, 2 inactivo
    },
    precio:{
      type: 'integer'
    },
    preciomayor:{
      type: 'integer'
    },
    descargar: {
      type: 'boolean', defaultsTo: false,
    }
  },

};

