import { getServerSession } from "next-auth";
import { ButtonLogout } from "../../../components/ButtonLogout";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";

import { Checkbox, FormGgroup, Input, Label, Scrollbar, Select, SelectSearch, Switch, Table } from "../../../styles/componentes";
import { mode } from "../../../styles/Theme/mode";

export default async function Users() {
  const {data: session} = await getServerSession(nextAuthOptions)
  const colors = mode()

  return (
    <>
      <h1>Bem vindo {session.name}!</h1>
      <br />
      <Scrollbar>
        <strong>Modelo de Input:</strong>
        <FormGgroup>
          <Input type="text" name="nome" required/>
          <Label htmlFor={"nome"} >Nome</Label>
        </FormGgroup>
        <FormGgroup>
          <Input type="password" name="senha" required/>
          <Label htmlFor={"senha"}>Senha</Label>
        </FormGgroup>
        <br />
        <strong>Modelo de Checkbox:</strong>
        <FormGgroup display="flex">
          <Checkbox color={colors.alerts.success} size={4} name={"check1"} id={"check1"}/>
          <Checkbox color={colors.alerts.info} size={2.5} name={"check2"} id={"check2"}/>
          <Checkbox color={colors.alerts.warning} size={2} name={"check3"} id={"check3"}/>
          <Checkbox color={colors.alerts.danger} size={6} name={"check4"} id={"check4"}/>
        </FormGgroup>
        <br />
        <strong>Modelo de Toogle Switch:</strong>
        <FormGgroup>
          <Switch name={'teste3'} id={'teste3'} color={colors.alerts.success}/>
        </FormGgroup>
        <FormGgroup>
          <Switch name={'teste2'} id={'teste2'} color={colors.alerts.info}/>
        </FormGgroup>
        <FormGgroup>
          <Switch name={'teste1'} id={'teste1'} color={colors.alerts.warning}/>
        </FormGgroup>
        <FormGgroup>
          <Switch name={'teste'} id={'teste'} color={colors.alerts.danger}/>
        </FormGgroup>
        <br />
        <strong>Modelo de Select:</strong>
        <FormGgroup>
          <Select name={'teste_select'} label="Select1" data={[{id: 1, name: "Skylan"}, {id: 2, name: "Skyshield"}]}/>
        </FormGgroup>
        <br />
        <strong>Modelo de SelectSearch:</strong>
        <FormGgroup>
          <SelectSearch name={'SelectSearch1'} label="SelectSearch1" data={[{id: 1, name: "Skylan"}, {id: 2, name: "Skyshield"}]}/>
        </FormGgroup>

        <Table />
      </Scrollbar>
      <ButtonLogout/>
    </>
  )
}
