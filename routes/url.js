const express=require('express');
const router=express.Router();
const  {handleGenerateShortId,handleGetUrl,handleGetNoClicks}=require('../controllers/url.js')

router.post('/',handleGenerateShortId);
router.get('/:id',handleGetUrl);
router.get('/analytics/:id',handleGetNoClicks);


module.exports=router;