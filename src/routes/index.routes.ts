import { Router } from 'express';
import { helloWorld,autos, about,searchModa } from '../controllers/index.controller';
import {api} from '../controllers/api.controller';

const router = Router();

router.get('/', helloWorld)    
// router.get('/login',login )
// router.get("/entrar",entrar)
router.get("/autos", autos)
router.get("/about",about)
router.get("/searchModa", searchModa)
export default router;