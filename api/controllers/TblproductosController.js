/**
 * TblproductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
const _ = require('lodash');

Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
	resultado = await QuerysServices(Tblproductos, params);
	for(let row of resultado.data){
		if( row.cat_clave_int ) row.cat_clave_int = await Tblcategorias.findOne({where:{id: row.cat_clave_int}});
		if( row.pro_sw_tallas ) {
			row.listTallas = await Tbltallas.find({ tal_tipo: row.pro_sw_tallas });
			row.listTallas = _.orderBy( row.listTallas, ['tal_descripcion'], ['asc'] );
		}
		if( row.pro_categoria ) row.pro_categoria = await Tblcategorias.findOne({ where: { id: row.pro_categoria }});
	}
	return res.ok(resultado);
}

Procedures.ordenar = async ( req, res )=>{
	let params = req.allParams();
	let resultado = Object();
	params.lista = params.lista.reverse();
	for( let row of params.lista ) resultado = await Tblproductos.update( { id: row.id }, { createdAt: new Date() });
	return res.status(200).send( { status:200, data: "Ordenado exitoso" });
}

module.exports = Procedures;

