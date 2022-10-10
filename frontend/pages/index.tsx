import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Cabecalho from '../src/Components/Cabecalho/Cabecalho'
import Lista from '../src/Components/Lista/Lista'
import { Professor } from '../src/@types/professor'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/diego3g.png",
      descrição: "Descrição do professor 1",
      valor_hora: 200
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/molinux.png",
      descrição: "Descrição do professor 2",
      valor_hora: 120
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/luizbatanero.png",
      descrição: "Descrição do professor 3",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/guilhermecapitao.png",
      descrição: "Descrição do professor 4",
      valor_hora: 145
    },
  ]

  return(
    <> 
      <Box sx={{ backgroundColor: `secondary.main`}}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}


export default Home
