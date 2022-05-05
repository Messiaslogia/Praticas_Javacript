const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) //

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

//Objeto JSON as propriedades são com aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

//Json: Tipos permitidos:
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))


