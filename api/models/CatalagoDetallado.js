/**
 * CatalagoDetallado.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    catalago:{
      model: 'catalago'
    },
    producto:{
      model: 'tblproductos'
    },
    foto:{
      type: 'string'
    },
    estado:{
      type: 'integer' // 0 activo, 2 inactivo
    }

  },

};

