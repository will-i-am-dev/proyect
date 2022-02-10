import type { NextPage } from 'next'
import { Button } from '../../components/buttons/button'
import { Card } from '../../components/common/card'
import { Input } from '../../components/forms/input'
import { Label } from '../../components/forms/label'
import { Range } from '../../components/forms/range'
import { AdminLayout } from '../../components/layouts/adminLayout'

const Simulator: NextPage = () => {
  return (
    <AdminLayout title={'Simulador de credito'}>
      <div className="flex flex-row justify-center w-full">
        <Card width="w-1/2">
          <p className="mb-5">Por favor ingrese los siguientes datos:</p>
          <Label>Monto a solicitar</Label>
          <Range />
          <Label>Coutas </Label>
          <Input name="id" type='number' />
          <div className="pt-4">
            <Button
              onClick={() => {}}
              text="Calcular"
            />
          </div>
        </Card>{' '}
      </div>
    </AdminLayout>
  )
}

export default Simulator
