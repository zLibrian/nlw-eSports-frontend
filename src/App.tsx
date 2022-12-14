import React from 'react';
import game1 from './assets/game-1.png'
import game2 from './assets/game-2.png'
import game3 from './assets/game-3.png'
import game4 from './assets/game-4.png'
import game5 from './assets/game-5.png'
import game6 from './assets/game-6.png'
import lupa from './assets/lupa.svg'
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
        <div className='flex justify-center gap-x-6 mt-16'>
            <a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game1} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>Dota 2</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a>
            <a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game2} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>CS:GO</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a><a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game3} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>Apex Legends 2</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a><a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game4} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>League of Legends</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a><a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game5} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>Fortnite</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a><a className='relative rounded-lg overflow-hidden' href='https://google.com'>
              <img src={game6} alt="game 1" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-text-box-gradient absolute right-0 left-0 bottom-0'>
                <strong className='text-white'>World of Warcraft</strong>
                <p className='text-zinc-400 text-sm'>Anuncios 4</p>
              </div>
            </a>
        </div>
        <section className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg'>
          <div className='py-6 px-8 bg-[#2A2634] w-full rounded flex justify-between items-center' >
            <div>
              <p className='text-white text-2xl font-black'>Não encontrou seu duo?</p>
              <p className='text-zinc-400 mt-1'>Publique um anúncio para encontrar novos players!</p>
            </div>
            <button className='flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white py-3 px-4 rounded'>
              <img src={lupa} alt="icone lupa" />
              <p>Publicar anúncio</p>
            </button>
          </div>
        </section>
    </div>
  ) 
}

export default App
