import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {

  const enviaDados = () => {
   
  }

  return (
    <Form>
      <label>
      Data de nascimento:
      <Input  placeholder="dd/mm/aaaa" type={'date'} value={props.dataNascimento} onChange={props.onChangeDataNascimento}/>
      </label>
      <label>
      Telefone:
      <Input  placeholder="Telefone" type={'number'} value={props.telefone} onChange={props.onChangeTelefone}/>
      </label>
      <label>
        Gênero:
        <select value={props.gender} onChange={props.onChangeGender}>
          <option>Homem cisgênero</option>
          <option>Mulher cisgênero</option>
          <option>Homem trans</option>
          <option>Mulher trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Autodeclara:
        <select value={props.raca} onChange={props.onChangeRaca}>
          <option value="negro">Negro</option>
          <option value="branco">Branco</option>
          <option value="pardo">Pardo</option>
          <option value="amarelo">Amarelo</option>
          <option value="indigena">Indígena</option>
          <option value="naoDizer">Prefiro não dizer</option>
        </select>
      </label>
        <Input type="radio" name="curso" value={props.integral} onChange={props.onChangeIntegral}/>
        <label for="integral">Curso integral web fullstack</label>
        <Input type="radio" name="curso" value={props.noturno} onChange={props.onChangeNoturno}/>
        <label for="noturno">Curso noturno web fullstack</label>
        <Input type="checkbox"  value={props.ensinoMedio} onChange={props.onChangeEnsinoMedio}/>
        <label for="ensinoMedio">Eu tenho ensino médio completo?</label>
        <Input type="checkbox"  value={props.participaAtividades} onChange={props.onChangeParticipaAtividades}/>
        <label for="participaAtividades">Eu tenho disponibilidade para participar das atividades</label>
      <button onClick={enviaDados}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm