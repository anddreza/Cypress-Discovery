import signup from '../pages/SignUpPage'

describe('Cadastro', () => {

  beforeEach(function () {
    cy.fixture('deliver').then((d) => {
      this.deliver = d
    })
  })

  //var signup = new SignupPage() //fica generico para todos os testes


  //before(function() {
  //   cy.log("Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes")
  // })

  // beforeEach(function (){
  //   cy.log("Tudo aqui é executado sempre ANTES de CADA caso de teste")
  //  })

  //  after(function(){
  //   cy.log("Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes")
  // })

  // afterEach(function (){
  //   cy.log("Tudo aqui é executado sempre DEPOIS de CADA caso de teste")
  // })

  it('Usuário deve se tornar um entregador', function () {

    //  var signup = new SignupPage()

    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)

  })

  it('CPF incorreto', function () {
    signup.go()
    signup.fillForm(this.deliver.cpf_inv)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')

  })
})