/**
 * CatalagoDetalladoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();
Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    // console.log("***", params);
	resultado = await QuerysServices(CatalagoDetallado, params);
	for( let row of resultado.data ){
		if( row.producto ) row.producto = await Tblproductos.findOne({ id: row.producto });
	}
	return res.ok(resultado);
}
module.exports = Procedures;