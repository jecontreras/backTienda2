/**
 * TblventasproductoController
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
	resultado = await QuerysServices(Tblventasproducto, params);
	for(let row of resultado.data){
		row.producto = await Tblproductos.findOne({ id: row.producto });
		row.ventas = await Tblventas.findOne({ id: row.ventas });
	}
	return res.ok(resultado);
}

module.exports = Procedures;