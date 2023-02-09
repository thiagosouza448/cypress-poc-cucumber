# SETUP AUTOMAÇÃO POC - CYPRESS



## Tecnologias utilizadas  
**AUTOMAÇÃO:** Node, Cypress, Cucumber adicionar o restante das tecnolgias  


**INTEGRAÇÃO:** Jenkins, Gitlab, Gitlab/CI  





##  Download de dependências locais

## Instalação node js LTS
**Versão node JS LTS link Download:** [node](https://nodejs.org/dist/v18.12.0/node-v18.12.0-x64.msi)  
Para confirma instalação do node JS, abra o **CMD** e digite:
```sh
node --version 
```


### Clone o projeto
**Repositório do projeto** [gitlab](http://gitlab.intranet/bra/whitelabel/auto/test-automation/originacao-lojista/portal-lojista). 

~~~bash  
  git clone http://gitlab.intranet/bra/whitelabel/auto/test-automation/originacao-lojista/portal-lojista
~~~


# INSTALAÇÃO DE DEPENDÊNCIAS

## Run Locally  

Vá até o diretório 

~~~bash  
cd Projeto-auto
~~~

Instalando as dependências  

~~~bash  
npm install
~~~

Start ambiente de desenvolvimento  

~~~bash   ( usar no gitbash)
npm run open:dsv
~~~  
Start ambiente de homologação  

~~~bash  
npm run open:hml
~~~  
Start ambiente de produção  

~~~bash  
npm run open:prod
~~~  

# GITFLOW PROJETO AUTUOMAÇÃO


Git flow foi formulado para uma melhor organização e compreensão da estrutura de branch dentro do projeto, evitando problemas na master.

Nosso sistema de git flow e composto por **MASTER** & **DEVELOP** como as branchs principais

Toda vez que é inciada uma task do projeto nova ou seja, uma **Feature** fazemos um checkout na branch **master** ou **develop** 
EX:
~~~bash  
git checkout master
~~~  

### CRIAÇÃO DE FEATURE
em seguida verificamos a nossa planilha:  **Horas Auto** [Planilha de features](https://ts.accenture.com/:x:/r/sites/C6-AutomaoRegressivo/Shared%20Documents/Auto/HorasAuto.xlsx?d=we46fa5c976094c099dddef00ccbfb98e&csf=1&web=1&e=HzRulI). 

em seguida buscamos o a coluna **COD** da nossa task.


em seguinda criamos a branch com feature/[**CODIGO TASK**]-[**INICIAL DO SEU NOME**] 
Exemplos:

|     COD           |NOME TASK                          |
|----------------|--------------------------------------|
|YUM760          |`'Login - Login via okta com sucesso'`|       

Temos a task com o **COD**: YUM760 e o **NOME**: Login - Login via okta com sucesso

Então usamos no seguinte formato para criação de uma nova branch:

~~~bash  
git checkout -b feature/YUM760-T
~~~  




Na imagem abaixo uma demonstração gráfica do gitflow:

![Node JS](imgs\gitflow.png)  




