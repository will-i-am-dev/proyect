import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '../components/buttons/button'
import { Card } from '../components/common/card'
import { Layout } from '../components/layouts/layout'
import { Input } from '../components/forms/input'
import { Label } from '../components/forms/label'
import { Title } from '../components/common/title'

const Home: NextPage = () => {
  const router = useRouter()

  return (

    <Layout>
      <Title>Inicio de Sesion BCS</Title>
      <div className="flex flex-row justify-center">
        <Card width="1/2">
          <p className="mb-5">Por favor ingrese los siguientes datos:</p>
          <Label>NÚMERO DE IDENTIFICACIÓN</Label>
          <Input name="id" />
          <Label>CONTRASEÑA</Label>
          <Input name="price" />
          <div className="pt-4">
            <Button
              onClick={() => router.push('/simulator/')}
              text="Entrar"
            />
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Home
