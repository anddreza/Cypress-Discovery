
export default {

    deliver: function () {

        var data = {

            name: 'Andreza Silva',
            cpf: '01301374517',
            email: 'andreza@gmail.com',
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
    }
}
