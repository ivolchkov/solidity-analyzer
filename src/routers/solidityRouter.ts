import {NextFunction, Request, Response, Router} from 'express'
import * as solidityProcessService from '../services/solidityProcessService'
import {asyncHandler} from '../services/asyncHandler'

export const solidityRouter = (): Router => {
  const router = Router({caseSensitive: true, strict: true})

  router.post('/',
      asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
          const input = String(req.query.code)
          const parsedResponse = await solidityProcessService.processMessage(input)
          res.json(parsedResponse)
        } catch (e) {
          console.log(`Error occurred during processing of the solidity message ${e.message}`)
          return next(e)
        }
      }))

  return router
}
