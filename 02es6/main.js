    const arr = [0, 1, 2, 3, 4, 5]

    const [ a, b, ...c ] = arr;

    console.log(a)
    console.log(b)
    console.log(c)

    function soma(...params) {
        return params.reduce((total, next) =>  total + next)
    }

    console.log(soma(1, 2, 3, 4, 5))

    function somaDois(a, b, ...params) {
        return params
    }

    console.log(1, 2, 3, 4, 5, 6)


    //SPREAD

    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]

    const arr3 = [ ...arr1, ...arr2]

    console.log(arr3)

    const usuario1 = {
        nome: 'Leonardo',
        idade: 23,
        empresa: 'Bitwide'
    }

    const usuario2 = { ...usuario1, nome: 'Patrick' }

    console.log(usuario2)
