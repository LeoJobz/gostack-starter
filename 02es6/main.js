class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.nome = 'Leo'
    }

    mostraNome() {
        console.log(this.nome)
    }
}

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    minhaLista.add('novotodo')
}

minhaLista.mostraNome();

//Static methods
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

console.log(Matematica.soma(1,2))