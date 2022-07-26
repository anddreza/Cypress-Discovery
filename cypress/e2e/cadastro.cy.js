
describe('Cadastro', ()=> {
  it('Usuário deve se tornar um entregador', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    var entregador = {
      nome: 'Andreza Silva',
      cpf: '81277794073',
      email: 'andreza@gmail.com', 
      whatsapp: '9299999999',
      endereco: {
        cep: '89600-000',
        rua: 'Rua 21',
        numero: '7',
        complemento: 'Ap 307',
        bairro: 'Centro',
        cidade_uf: 'Manaus/AM'
      }
    }

    cy.get('input[name="name"]').type(entregador.nome)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
  })
})