/**
 * CatalagoDetalladoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();
var base64Img = require('base64-img');

Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    // console.log("***", params);
	resultado = await QuerysServices(CatalagoDetallado, params);
	for( let row of resultado.data ){
		if( row.producto ) {
			row.producto = await Tblproductos.findOne({ id: row.producto });
			if( row.producto ) { 
				base = await Procedures.FormatoBase64( row.producto.foto );
				row.base64 = base;
			}
		}
		if( row.foto ){
			base = await Procedures.FormatoBase64( row.foto );
			row.base64 = base;
			row.producto = {
				foto: row.foto
			}
		}
	}
	return res.ok(resultado);
}

Procedures.FormatoBase64 = ( foto )=>{
	return new Promise( resolve=>{
		base64Img.requestBase64(foto, function(err, res, body) {
			// console.log("********", res, body);
			resolve( body );
		});
	});
}
module.exports = Procedures;