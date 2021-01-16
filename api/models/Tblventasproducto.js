/**
 * Tblventasproducto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    producto:{
      model: 'tblproductos'
    },
    titulo:{
      type: 'string'
    },
    precio:{
      type: 'integer',
      defaultsTo: 0
    },
    cantidad:{
      type: 'integer',
      defaultsTo: 0
    },
    tallaSelect:{
      type: 'string'
    },
    comision:{
      type: 'integer',
      defaultsTo: 0
    },
    ventas:{
      model: 'tblventas'
    }
  },

};

