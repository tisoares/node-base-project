import { Request, Response } from 'express'

import User from '../models/User'
import ResponseError from '../../error/responseError'

class UserController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)
      return res.json(user)
    } catch (e) {
      return res.json(ResponseError.getErrorResponse(req, res, 'requestFailed'))
    }
  }
}

export default new UserController()
