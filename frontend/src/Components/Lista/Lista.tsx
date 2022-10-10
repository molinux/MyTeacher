import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Descrição, Foto, Informacoes, ItemLista, ListaStyled, ListVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
  professores: Professor[]
}

const Lista = (props: ListaProps) => {
  return (
    <>
      <div>
        {props.professores.length > 0 ? (
          <ListaStyled>
          {props.professores.map(professor => (
              <ItemLista key={professor.id}>
                <Foto src={professor.foto}></Foto>
                <Informacoes>
                  <Nome>{professor.nome}</Nome>
                  <Valor>{professor.valor_hora.toLocaleString('pt-br', {minimumIntegerDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                  <Descrição>{professor.descrição}</Descrição>
                  <Button sx={{ width: '70%' }}>Marcar Aula com {professor.nome}</Button>
                </Informacoes>
              </ItemLista>
          ))}
          </ListaStyled>
        ) : (
          <ListVazia>Nenhum item encontrado</ListVazia>
        )}
      </div>
    </>
  )
}

export default Lista;