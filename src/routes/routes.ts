import { Router } from 'express'
import '../config/bootstrap.js' // load .env config
// import dotenv from 'dotenv'

import OperadorAuth from '../app/controllers/operadorAuth'
// import AuthorizationTokenRoute from '../middleware/AuthorizationTokenRoute'

// import { operador } from '../models/operador'
import UserController from '../app/controllers/UserController'

const routes = Router()

// Rota de Login
routes.post('/login', OperadorAuth.login)

// #region Opeardor

// route.get('/operador', new AuthorizationTokenRoute('operador').midTokenAuth, new DataManager(operador, allTables).show)
// // Verifica se está deasabilitada a validação do token para cadastrar um novo usuário caso tenha acabado de instalar
// route.post('/operador', process.env.CFG_DISABLE_TOKEN === 'true'
//   ? (req, res, next):void => { next() } // Sem token
//   : new AuthorizationTokenRoute('operador').midTokenAuth, new DataManager(operador, allTables).store) // com token
// route.put('/operador/:id', new AuthorizationTokenRoute('operador').midTokenAuth, new DataManager(operador, allTables).update)
// route.delete('/operador/:id', new AuthorizationTokenRoute('operador').midTokenAuth, new DataManager(operador, allTables).destroy)
// route.get('/operador/tools', new AuthorizationTokenRoute('operador').midTokenAuth, new DataManager(operador, allTables).details)

// #endregion

routes.post('/users', UserController.store)

export default routes
