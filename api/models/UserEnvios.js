/**
 * UserEnvios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string'
    },
    apellido:{
      type: 'string'
    },
    Nidentificacion:{
      type: 'integer'
    },
    Nwhatsaap:{
      type: 'integer'
    },
    direccionRecogida:{
      type: 'string'
    },
    correo:{
      type: 'string'
    },
    urlFacebook:{
      type: 'string'
    }
  },

};

