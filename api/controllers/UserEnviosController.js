/**
 * UserEnviosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let Procedures = Object();

Procedures.querys = async (req, res)=>{
	let params = req.allParams();
    let resultado = Object();
    // console.log("***", params);
	resultado = await QuerysServices(UserEnvios, params);
	return res.ok(resultado);
}
