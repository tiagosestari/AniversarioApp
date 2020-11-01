import React from 'react';


class App extends React.Component {
   state = {
     people:  [
      {
        id: 1,
        name: 'Bertie Yates',
        date: "20-11-2001",
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        eHoje: false
      },
      {
        id: 2,
        name: 'Hester Ogan',
        date: "30-09-2004",
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        eHoje: false
      },
      {
        id: 3,
        name: 'Larry Little',
        date: "10-06-1995",
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        eHoje: false
      },
      {
        id: 4,
        name: 'Sean Walsh',
        date: "12-06-1989",
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        eHoje: false
      },
      {
        id: 5,
        name: 'Lola Gardner',
        date: "10-06-1982",
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        eHoje: false
      },
    ],
    novoNome: "",
    novaData: "",
    novaDataSistema: "",
    novaImagem: "",
    today: "",
    filter: "todos"
    
   }


   //{adicionar === true ? <Add mostrar={adicionar} /> : <List people={people} />}

   componentDidMount () {
      const date = new Date();
      let formatted = date.toISOString();
      
      let ano = formatted.slice(0,4)
      let mes = formatted.slice(5,7)
      let dia = formatted.slice(8,10)
      formatted = dia + "-" + mes + "-" + ano
      this.setState({today: formatted})
   }

   componentDidUpdate () {
     
    }


     
   
   

   deletarEntrada = (id) => {
  
    const novaLista = this.state.people.filter((person) => {
      
      if (id === person.id) {return false} else {return true} 
    
    })

    this.setState({people: novaLista})

   }

   deletarTodos = () => {
     this.setState({people: []})
   }

   onChangeFilter = (event) => {
    this.setState({filter: event.target.value})

    const novaLista = this.state.people.map((person) => {
      let a = person.date.split("")
      a = a.slice(0,5)
      a = a.join("")

      let b = this.state.today.split("")
      b = b.slice(0,5)
      b = b.join("")

      if (a === b) {
         const novaPessoa = {
           ...person,
           eHoje: true
         }
         return novaPessoa
    } else {
      const novaPessoa = {
        ...person,
        eHoje: false
      }
      return novaPessoa
    }
    })
    
    this.setState({people: novaLista})

   }

   onChangeNome = (event) => {

    this.setState({novoNome: event.target.value})
    //console.log(this.state.novoNome)

   }

   onChangeFoto = (event) => {

    this.setState({novaImagem: event.target.value})
    //console.log(this.state.novaImagem)

   }

   onChangeData = (event) => {

    this.setState({novaDataSistema: event.target.value})

    let formatted = event.target.value
    let ano = formatted.slice(0,4)
    let mes = formatted.slice(5,7)
    let dia = formatted.slice(8,10)
    formatted = dia + "-" + mes + "-" + ano

    this.setState({novaData: formatted})
    console.log(this.state.novaData)

   }
   
   adicionarEntrada = () => {
       
    const novaEntrada = {
        id: Date.now(),
        name: this.state.novoNome,
        date: this.state.novaData,
        image: this.state.novaImagem,
        eHoje: false
      }

    
    
    const novaLista = [...this.state.people, novaEntrada]

    this.setState({people: novaLista})

    this.setState({novoNome: ""})
    this.setState({novaData: ""})
    this.setState({novaDataSistema: ""})
    this.setState({novaImagem: ""})
       
     
   }

   apertouEnter = (event) => {
      if (event.keyCode === 13) {
        this.adicionarEntrada()
      }
   }
    

    render() {

      const listaFiltrada = this.state.people.filter(person => {
          if(this.state.filter === 'aniversariantes') {
            if(person.eHoje === true) {return true} else {return false}
          } else {return true}

      })

      return (
      
      <main>
        <section className="container">

          <h3>Hoje: {this.state.today} </h3>
          <h3>{this.state.people.length} Amigos</h3>
          
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="todos">Todos</option>
            <option value="aniversariantes">Aniversariantes</option>
          </select>

              

          {listaFiltrada.map( (person) => {
            
            return (
              <article key={person.id} className="person">
                
                <img src={person.image} alt={person.name} />
    
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.date} </p>
                </div>
                
                <div>
                  <a href="#" onClick={() => {this.deletarEntrada(person.id)}}>X</a>
                </div>
    
              </article> 
              
            )
    
          })} 
        

          
          <button onClick={this.deletarTodos}>Deletar todos</button>
          
        </section>

        <section className="container">

          <h3>Adicionar Aniversariante</h3>
          
          
            <label for="name" >Nome:</label> <br />
            <input type="text" name="nome" value={this.state.novoNome} onChange={this.onChangeNome} onKeyUp={this.apertouEnter}></input> <br /><br />
            
            <label for="nascimento">Data de Nascimento:</label> <br />
            <input type="date" name="nascimento" value={this.state.novaDataSistema} onChange={this.onChangeData} onKeyUp={this.apertouEnter}></input> <br /><br />

            <label for="foto">Link da foto:</label> <br />
            <input type="text" name="foto" value={this.state.novaImagem} onChange={this.onChangeFoto} onKeyUp={this.apertouEnter}></input> <br /><br />
          
          <button onClick={this.adicionarEntrada}> Adicionar </button>
         
        </section>


      </main>
  
  
    );

    }
}

export default App;
