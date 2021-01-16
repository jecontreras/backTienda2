/**
 * TblventasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions 
 */
let Procedures = Object();
const _ = require('lodash');

Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    // console.log("***", params);
	resultado = await QuerysServices(Tblventas, params);
	for(let row of resultado.data){
		row.usu_clave_int = await Tblusuario.findOne({ id: row.usu_clave_int });
		row.pro_clave_int = await Tblproductos.findOne({ id: row.pro_clave_int });
	}
	return res.ok(resultado);
}

Procedures.create = async( req, res )=>{
	let params = req.allParams();
	let resultado = Object();
	let artiuclos = params.listaArticulo;
	params = _.omit( params, ['listaArticulo']);
	resultado = await Tblventas.create( params ).fetch();
	for( let row of artiuclos ){
		let result = await Procedures.registroArticulo( {
			producto: row.articulo,
			titulo: row.titulo,
			precio: row.costo,
			cantidad: row.cantidad,
			comision: row.comision,
			ventas: resultado.precio,
			tallaSelect: row.tallaSelect
		});
	}
	resultado = await Tblventas.findOne( { where: { id: resultado.id } } ).populate("usu_clave_int").populate("pro_clave_int").populate("ven_usu_actualiz").populate("ven_empresa");
	return res.status( 200 ).send( resultado );
}

Procedures.registroArticulo = async( data ) => {
	let resultado = Object();
	resultado = await Tblventasproducto.create( data ).fetch();
	return resultado;
}

// Procedures.update = async ( req, res)=>{
// 	let  params = req.allParams();
// 	let resultado = Object();
// 	params = _.omit(params, ['id', 'createdAt', 'updatedAt']);
// 	params.usu_clave_int = await Tblusuario.findOne({ usu_email: params.ven_usu_creacion });
// 	params.usu_clave_int = params.usu_clave_int.id;
// 	resultado = await Tblventas.create( params );
// 	return res.ok(resultado);
// }

module.exports = Procedures;