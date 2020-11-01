

# Projeto: Aniversário App  #
 Inspirado em: [https://uidesigndaily.com/](https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042) 
 #### Desenvolvido por Tiago Sestari ####


## INTRODUÇÃO ##

Esse projeto é um mock de um app que registra amigos e suas datas de aniversário.
Inspirado no material acima, o projeto original apenas mostrava a lista de amigos com Foto, Nome e Idade e permitia que a lista toda fosse apagada.
A partir disso, aproveitei o design para implementar algumas funções usando **React.js**:
* Possibilidade de **apagar um item da lista** de cada vez
* Possibilidade de **adicionar novos itens a lista**
* Um header dinâmico que atualiza com a data do dia
* Um **filtro** para mostrar todos os amigos ou apenas os aniversariantes 
* A adição de novos itens a lista permite o uso do botão enter além de pressionar o botão adicionar

## TELAS E FUNCIONAMENTO ##

#### Tela de amigos (as) ####
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/src/telas/amigos.PNG?raw=true)

Usando react.js uma lista do estado é renderizada mostrando todos os amigos adicionados.
A primeira linha é dinâmica chamada no componentDidMount() atualizada com a data de hoje e um pequeno código para formatá-la.

#### Tela de adicionar ####

A tela de adicionar tem 3 campos: nome, data de nascimento e um de link para foto.
A adição à lista funciona tanto pressionando o botão quanto apertando enter e os campos são limpos assim que o item é adicionado.

![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/src/telas/adicionar.PNG?raw=true)

### Filtro ###

É possível filtrar a lista de amigos (as) de modo a mostrar apenas os aniversariantes

![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/src/telas/amigos_sf.PNG?raw=true)
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/src/telas/amigos_cf.PNG?raw=true)