/**
 * EmpresaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();
Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    resultado = await QuerysServices(Empresa, params);
    for( let row of resultado.data ){
        if( row.usuario ) row.usuario = await Tblusuario.findOne({ id: row.usuario });
    }
	return res.ok(resultado);
}
Procedures.create = async ( req, res )=>{
    let params = req.allParams();
    let resultado = Object();
    resultado = await Empresa.create( params ).fetch();
    return res.status(200).send(resultado);
}
module.exports = Procedures;

