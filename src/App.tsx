import logoImg from './assets/nlw-logo.svg'
import "./styles/main.css"

function App() {
  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20 justify-between'>
      <img src={logoImg} width="400px" alt="nwl logo" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-clip-text bg-nlw-gradient text-transparent'>
          duo
        </span> está aqui.</h1>
    </div>
  ) 
}

export default App
