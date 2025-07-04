import { Router } from 'express';
import GetFrequenciaController from '../../app/Controllers/ControllersFrequencia/ControllerGetFrequencias.js';
import ListFrequenciaController from '../../app/Controllers/ControllersFrequencia/ControllerListFrequencias.js';
import InsertFrequenciaController from '../../app/Controllers/ControllersFrequencia/ControllerCreateFrequencias.js';
import UpdateFrequenciaController from '../../app/Controllers/ControllersFrequencia/ControllerUpdateFrequencias.js';
import DeleteFrequenciaController from '../../app/Controllers/ControllersFrequencia/ControllerDeleteFrequencias.js';

export default (function () {

    const router = Router();

    // GET - Listar todas as frequências
    router.get('/api/frequencias', ListFrequenciaController.list);

    // GET - Obter uma frequência por ID
    router.get('/api/frequencias/:id', GetFrequenciaController.get);

    // POST - Cadastrar nova frequência
    router.post('/api/frequencias', InsertFrequenciaController.insert);

    // PUT - Atualizar frequência
    router.put('/api/frequencias/:id', UpdateFrequenciaController.update);

    // DELETE - Excluir frequência
    router.delete('/api/frequencias/:id', DeleteFrequenciaController.delete);

    return router;

})();