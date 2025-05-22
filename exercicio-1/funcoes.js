function areaQuadrado(base){
    let result=Math.pow(base,2)
    console.log(result);
    return result;
}

function areaTriangulo(base, altura){
    let result = (base * altura/2);
    console.log(result);
    return result;
}

function areaRetangulo(base,altura){
    let result = (base * altura);
    console.log(result);
    return result;
}

function areaCirculo(raio){
    let raioAoQuadrado = Math.pow(raio,2);
    let result = 3.14 * raioAoQuadrado;
    console.log(result);
    return result;
}
module.exports = {areaCirculo, areaQuadrado, areaRetangulo, areaTriangulo}