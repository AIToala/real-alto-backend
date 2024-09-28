const express = require('express');

const router = express.Router();

// Import all controllers
const PiezasController = require('../controllers/PiezasController');
const PiezaUsosController = require('../controllers/PiezaUsosController');
const MuseosController = require('../controllers/MuseosController');
const MuseoContactosController = require('../controllers/MuseoContactosController');
const ExhibicionPiezasController = require('../controllers/ExhibicionPiezasController');
const PiezaDimensionesController = require('../controllers/PiezaDimensionesController');
const ContactosController = require('../controllers/ContactosController');
const DimensionesController = require('../controllers/DimensionesController');
const ModelosController = require('../controllers/ModelosController');
const ExhibicionController = require('../controllers/ExhibicionController');
const ModeloImagenController = require('../controllers/ModeloImagenController');
const ProcedenciaController = require('../controllers/ProcedenciaController');
const TiposController = require('../controllers/TiposController');
const UsosController = require('../controllers/UsosController');

// Set prefix for the routes
router.use('/api', router);
router.get('/', (req, res) => {
	res.json({
		message: 'Bienvenido a Real Alto - Proximamente documentacion API.',
	});
});
// Routes for Piezas
router.post('/piezas', PiezasController.create);
router.get('/piezas', PiezasController.findAll);
router.get('/piezas/:id', PiezasController.findOne);
router.put('/piezas/:id', PiezasController.update);
router.delete('/piezas/:id', PiezasController.delete);

// Routes for Pieza_Usos
router.post('/pieza-usos', PiezaUsosController.create);
router.get('/pieza-usos', PiezaUsosController.findAll);
router.get('/pieza-usos/:id', PiezaUsosController.findOne);
router.put('/pieza-usos/:id', PiezaUsosController.update);
router.delete('/pieza-usos/:id', PiezaUsosController.delete);

// Routes for Museos
router.post('/museos', MuseosController.create);
router.get('/museos', MuseosController.findAll);
router.get('/museos/:id', MuseosController.findOne);
router.put('/museos/:id', MuseosController.update);
router.delete('/museos/:id', MuseosController.delete);

// Routes for Museo_Contactos
router.post('/museo-contactos', MuseoContactosController.create);
router.get('/museo-contactos', MuseoContactosController.findAll);
router.get('/museo-contactos/:id', MuseoContactosController.findOne);
router.put('/museo-contactos/:id', MuseoContactosController.update);
router.delete('/museo-contactos/:id', MuseoContactosController.delete);

// Routes for Exhibicion_Piezas
router.post('/exhibicion-piezas', ExhibicionPiezasController.create);
router.get('/exhibicion-piezas', ExhibicionPiezasController.findAll);
router.get('/exhibicion-piezas/:id', ExhibicionPiezasController.findOne);
router.put('/exhibicion-piezas/:id', ExhibicionPiezasController.update);
router.delete('/exhibicion-piezas/:id', ExhibicionPiezasController.delete);

// Routes for Pieza_Dimensiones
router.post('/pieza-dimensiones', PiezaDimensionesController.create);
router.get('/pieza-dimensiones', PiezaDimensionesController.findAll);
router.get('/pieza-dimensiones/:id', PiezaDimensionesController.findOne);
router.put('/pieza-dimensiones/:id', PiezaDimensionesController.update);
router.delete('/pieza-dimensiones/:id', PiezaDimensionesController.delete);

// Routes for Contactos
router.post('/contactos', ContactosController.create);
router.get('/contactos', ContactosController.findAll);
router.get('/contactos/:id', ContactosController.findOne);
router.put('/contactos/:id', ContactosController.update);
router.delete('/contactos/:id', ContactosController.delete);

// Routes for Dimensiones
router.post('/dimensiones', DimensionesController.create);
router.get('/dimensiones', DimensionesController.findAll);
router.get('/dimensiones/:id', DimensionesController.findOne);
router.put('/dimensiones/:id', DimensionesController.update);
router.delete('/dimensiones/:id', DimensionesController.delete);

// Routes for Modelos
router.get('/modelos', ModelosController.findAll);
router.get('/modelos/:id', ModelosController.findOne);
router.put('/modelos/:id', ModelosController.update);
router.delete('/modelos/:id', ModelosController.delete);

// Routes for Exhibicion
router.post('/exhibiciones', ExhibicionController.create);
router.get('/exhibiciones', ExhibicionController.findAll);
router.get('/exhibiciones/:id', ExhibicionController.findOne);
router.put('/exhibiciones/:id', ExhibicionController.update);
router.delete('/exhibiciones/:id', ExhibicionController.delete);

// Routes for Modelo_Imagen
router.post('/modelo-imagen', ModeloImagenController.create);
router.get('/modelo-imagen', ModeloImagenController.findAll);
router.get('/modelo-imagen/:id', ModeloImagenController.findOne);
router.put('/modelo-imagen/:id', ModeloImagenController.update);
router.delete('/modelo-imagen/:id', ModeloImagenController.delete);

// Routes for Procedencia
router.post('/procedencia', ProcedenciaController.create);
router.get('/procedencia', ProcedenciaController.findAll);
router.get('/procedencia/:id', ProcedenciaController.findOne);
router.put('/procedencia/:id', ProcedenciaController.update);
router.delete('/procedencia/:id', ProcedenciaController.delete);

// Routes for Tipo_Pieza
router.post('/tipos', TiposController.create);
router.get('/tipos', TiposController.findAll);
router.get('/tipos/:id', TiposController.findOne);
router.put('/tipos/:id', TiposController.update);
router.delete('/tipos/:id', TiposController.delete);

// Routes for Tipo_Uso
router.post('/usos', UsosController.create);
router.get('/usos', UsosController.findAll);
router.get('/usos/:id', UsosController.findOne);
router.put('/usos/:id', UsosController.update);
router.delete('/usos/:id', UsosController.delete);

module.exports = router;
