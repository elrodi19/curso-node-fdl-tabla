

const fs = require('fs');

const crearArchivo = async( base = 5 ) => {

    try{
        console.log('==========================');
        console.log('      TABLA DEL:', base);
        console.log('==========================');

        let salida = '';

        for( let i = 1; i<=10; i++ ){
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        }

        console.log( salida );

        fs.writeFileSync( `Tabla-${ base }.txt`, salida );

        return `Tabla-${ base }.txt`;
    }catch( err ){
        throw err
    }

}

module.exports = {
    crearArchivo
}