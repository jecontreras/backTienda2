
module.exports = {
  envios: async( data )=>{
    let resultado = Object();
    let url = `https://socialmarkert.herokuapp.com/mensajes/create`;
    // let url = `http://localhost:1338/mensajes/create`;
    let headers = { 
      'Connection': 'keep-alive',
      'sec-ch-ua': '"\\Not;A"Brand";v="99", "Google Chrome";v="85", "Chromium";v="85"',
      'Accept': 'application/json',
      'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2VAZW1haWwuY29tIiwiaWQiOiI1ZWJjMjhmOWRiYTY5NTAwZDg4N2Y0NzAiLCJpYXQiOjE2MDEzNDg4ODYsImV4cCI6MTYwMTQzNTI4Nn0.zZDK0x2tZAJlQ3PvmnMf8PSBAtl_8okCXiAeuwpwwBU',
      'sec-ch-ua-mobile': '?0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      'Content-Type': 'application/json; charset=UTF-8',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Accept-Language': 'es-US,es-419;q=0.9,es;q=0.8,en;q=0.7,und;q=0.6,pl;q=0.5,pt;q=0.4'
     };
    let body = JSON.stringify( {
      "tipoEnvio": "0",
      "listEmails": [
          {
              "usu_email": data.emails,
              "id": "NDU82"
          }
      ],
      "creado": "5ebc28f9dba69500d887f470",
      "creadoEmail": "socialMarketing@gmail.com",
      "subtitulo": data.subtitulo,
      "descripcion": data.descripcion,
      "emails": data.emails
    } );
    resultado = await HttpService.request(url, body, false, headers, {}, 'POST');
    // console.log("***viendo result", resultado, ">>>>>>>>>><", body );
    return resultado;
  }
}
