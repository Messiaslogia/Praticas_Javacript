function Pessoa() {
    this.idade = 0
    const self = this // Burlando o THIS

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) */, 1000); // Burlando o THIS
}

new Pessoa