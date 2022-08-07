
var faker = require('faker')
// importar a biblioteca faker 
var cpf = require('gerador-validador-cpf')

export default {

        // criando uma função 
    deliver: function () {

        var firstName = faker.name.firstName()
        // traz um primeiro nome dinâmico 
        var lastName = faker.name.lastName()
        // criou as duas acima para montar a massa de teste de forma dinâmica 

        var data = {

            name: `${firstName} ${lastName}` ,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '9299999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
        // fiz um retorno porque o metodo deliver que está dentro do modulo SignupFactory 
        // vai devolver uma massa de teste completa 
    }
}
