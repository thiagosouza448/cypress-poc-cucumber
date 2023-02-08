// LOGIN LOJISTA 
const ApresentacaoPage = require("../pages/originacao-lojista/apresentacao.page")
const LoginPage = require("../../support/pages/originacao-lojista/login.page")
const SelecaoLojaPage = require("../../support/pages/originacao-lojista/selecao-loja.page")
const HomePage = require("../pages/originacao-lojista/home.page")
const ClienteVeiculoPage = require("../pages/originacao-lojista/dados-cliente-veiculo.page")
const SimulacaoPage = require("../pages/originacao-lojista/simulacao.page")

// PORTAL PLATFORM
const ApresentacaoPagePlatform = require("../../support/pages/platform/apresentacao.page")
const LoginPagePlatform = require("../../support/pages/platform/login.page")
const HomePagePlatform = require("../../support/pages/platform/home.page")
const BackOfficePagePlatform = require("../../support/pages/platform/backoffice.page")

class Pages {
    constructor(){
        // LOGIN LOJISTA 
        this.apresentacaoPage = new ApresentacaoPage()
        this.loginPage = new LoginPage()
        this.selecaoLojaPage = new SelecaoLojaPage()
        this.homePage = new HomePage()
        this.clienteVeiculoPage = new ClienteVeiculoPage()
        this.simulacao = new SimulacaoPage()
        // PORTAL PLATFORM
        this.apresentacaoPagePlatform  = new ApresentacaoPagePlatform()
        this.loginPagePlatform  = new LoginPagePlatform()
        this.homePagePlatform  = new HomePagePlatform()
        this.backOfficePlatform  = new BackOfficePagePlatform()
    }
}

module.exports  = Pages