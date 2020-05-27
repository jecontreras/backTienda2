/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,
  // '*': ['tenant'],
  // 'tblusuario/querys': true,
  // 'tblusuario/register': true,
  // 'tblusuario/login': true,
  // 'tblproductos/querys': true,
  // 'notificaciones/querys': true,
  // 'tblcategorias/querys': true,
  // 'tbltestimonio/querys': true

};
