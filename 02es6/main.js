    const arr = [1, 3, 4, 5, 6, 7]

    const newArrUm = arr.map(function(item) {
        return item * 2
    })

    const newArrDois = arr.map(item => {
        return item * 2
    })

    const newArrTres = arr.map(item => item * 2)

    console.log(newArrTres)

    const teste = () => ({ nome: 'Leonardo '})

    console.log(teste())