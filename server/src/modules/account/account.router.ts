import { Router } from 'express'

import * as controller from './account.controller'
import { validateDuplicateEmail } from './account.middleware'

const router = Router()

router.route('/login').post(controller.login)
router.route('/register').post(validateDuplicateEmail, controller.register)

module.exports = router;
