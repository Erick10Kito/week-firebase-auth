
import "../src/index.css"


function App() {
const handleClickButtonLogin = async() => {};



  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-indigo-700 pt-20 pb-20 pl-20 pr-20 rounded-3xl">
      <div className="flex flex-col items-center py-12">
        <h1>Erick</h1>
        <h3>O homem mais sortudo desse mundo!</h3>
        <p>Tenho a melhor mulher que eu poderia pedir a Deus do meu lado!</p>
        <p>Quer saber como ser sortudo assim? então só tenta porque conseguir vai ser dificil....</p>
        <h2>ELA É UNICA!</h2>
      </div>
      <div>
        <form className="flex flex-col items-center">
          <h3>Faça o registro e boa tentativa</h3>
        <p>mas ja aviso que não vai conseguir!</p>
        <button onClick={() => handleClickButtonLogin }>Login Google</button>
        </form>
        
      </div>
      </div>
    </div>
  );
}

export default App;
