import signup from '../pages/SignUpPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

 // beforeEach(function () {
  //  cy.fixture('deliver').then((d) => {
  //    this.deliver = d
 //   })
 // })

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

  it('User should be deliver', function () {

    var deliver = signupFactory.deliver()

    //  var signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)

  })

  it('Incorrect document', function () {

    var deliver = signupFactory.deliver()

    deliver.cpf = '000000141AA'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')

  })

  it('Incorret email', function () {

    var deliver = signupFactory.deliver()

    deliver.email = 'user.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')

  })


})