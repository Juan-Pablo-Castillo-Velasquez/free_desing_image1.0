import { Router } from 'express';
import { helloWorld,login,entrar } from '../controllers/index.controller';
import {api} from '../controllers/api.controller';

const router = Router();

router.get('/', helloWorld)    
router.get('/login',login )
router.get("/entrar",entrar)


export default router;