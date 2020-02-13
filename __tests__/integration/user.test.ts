/* eslint-disable @typescript-eslint/no-explicit-any */
import req from 'supertest'
import bcrypt from 'bcryptjs'

import Server from '../../src/server'
import truncate from '../util/truncate'
import factory from '../factorie'

describe('User', ():void => {
  const srv = new Server()

  beforeEach(async (): Promise<void> => {
    await truncate()
  })

  it('should be able to rediter user', async (): Promise<void> => {
    const usr: any = await factory.attrs('User')
    const response = await req(srv.app)
      .post('/users')
      .send(usr)

    expect(response.body).toHaveProperty('usrId')
  })

  it('should not be able to rediter user', async (): Promise<void> => {
    const usr: any = await factory.attrs('User', { usrName: undefined })
    const response = await req(srv.app)
      .post('/users')
      .send(usr)

    expect(response.status).toBe(400)
  })

  it('should encrypt user password when new user created', async (): Promise<void> => {
    const user: any = await factory.create('User', { usrPassword: '123465' })
    const compareHash = await bcrypt.compare('123465', user.usrPasswordHash)
    expect(compareHash).toBe(true)
  })
})
