module.exports = {
   entry : './main',
   output: {filename:'app.js'},
   module: {
     loader:[
{

    test : '/ts$/',
    loader: 'ts-loader'
}
     ]


   },

   resolve : {
  extensions : ["",".ts",".js"]

   }
}


