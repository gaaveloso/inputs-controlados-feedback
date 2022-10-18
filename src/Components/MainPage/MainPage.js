import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirm, setEmailConfirm] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
const [dataNascimento, setDataNascimento] = useState("")
const [telefone, setTelefone] = useState("")
const [gender, setGender] = useState("")
const [raca, setRaca] = useState("")
const [integral, setIntegral] = useState("integral")
const [noturno, setNoturno] = useState("noturno")
const [ensinoMedio, setEnsinoMedio] = useState(true)
const [participaAtividades, setParticipaAtividades] = useState(true)

//O input de nome precisa ter no mínimo 10 caracteres e no máximo 30.
const onChangeName = (event) => {
  setName(event.target.value)
}

//A pessoa estudante só pode se inscrever na Labenu se for maior de idade
const onChangeAge = (event) => {
  setAge(event.target.value)
}

//Verifique se o e-mail está no formato correto: usuario@usuario.com
// Crie um novo input de confirmação de email. Caso os dois inputs estejam com conteúdo iguais, o usuário pode seguir pra próxima etapa.
const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeEmailConfirm = (event) => {
  setEmailConfirm(event.target.value)
}

const sendData = () => {

  if(name===""){
    alert('Nome obrigatório')
  }else if(name.length<10){
    alert('Nome tem que ter no mínimo 10 caracteres')
  } else if(name.length>30){
    alert('Nome tem que ter no máximo 30 caracteres')
  } else if(age==0){
    alert('Idade obrigatória')
  }else if(age<18 && age>0){
    alert('Precisa ter mais de 18 anos')
  }else if(email===""){
    alert('Email obrigatório')
  }else if(email!=="usuario@usuario.com"){
    alert('Email invalido')
  }else if(emailConfirm===""){
    alert('Confirmar email')
  }else if(email!==emailConfirm){
    alert('Email tem que ser igual ao anterior')
  }else{
    setFormFlow(2)
  }
}

const onChangeDataNascimento = (event) => {
  setDataNascimento(event.target.value)
  console.log(event.target.value)
}

const onChangeTelefone = (event) => {
  setTelefone(event.target.value)
  console.log(event.target.value)
}

const onChangeGender = (event) => {
  setGender(event.target.value)
  console.log(event.target.value)
}

const onChangeRaca = (event) => {
  setRaca(event.target.value)
  console.log(event.target.value)
}

const onChangeIntegral = (event) => {
  setIntegral(event.target.value)
  console.log(event.target.value)
}

const onChangeNoturno = (event) => {
  setNoturno(event.target.value)
  console.log(event.target.value)
}

const onChangeEnsinoMedio = (event) => {
  setEnsinoMedio(!ensinoMedio)
  console.log(event.target.value)
}

const onChangeParticipaAtividades = (event) => {
  setParticipaAtividades(!participaAtividades)
  console.log(event.target.value)
}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
          name={name}
          age={age}
          email={email}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          sendData={sendData}
          onChangeEmailConfirm={onChangeEmailConfirm}
      /> : 
      <ConfirmationForm 
          onChangeGender={onChangeGender}
          onChangeTelefone={onChangeTelefone}
          onChangeDataNascimento={onChangeDataNascimento}
          onChangeRaca={onChangeRaca}
          onChangeIntegral={onChangeIntegral}
          onChangeNoturno={onChangeNoturno}
          onChangeEnsinoMedio={onChangeEnsinoMedio}
          onChangeParticipaAtividades={onChangeParticipaAtividades}
          gender={gender}
          telefone={telefone}
          dataNascimento={dataNascimento}
          raca={raca}
          integral={integral}
          noturno={noturno}
          ensinoMedio={ensinoMedio}
          participaAtividades={participaAtividades}
      />}
    </MainContainer>
  )
}

export default MainPage