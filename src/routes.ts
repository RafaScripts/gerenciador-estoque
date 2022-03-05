import express from 'express';

import UserController from "./controller/UserController";
import SessionController from "./controller/SessionController";
import VendorsController from "./controller/VendorsController";
import ProductsController from "./controller/ProductsController";
import AuthMiddleware from './midlewares/auth';

const Routes = express();

Routes.post('/login', SessionController.store);

Routes.use(AuthMiddleware);

Routes.get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete);

Routes.get('/vendors', VendorsController.index)
    .post('/vendors', VendorsController.create)
    .delete('/Vendors/:id', VendorsController.delete);

Routes.get('/Products', ProductsController.index)
    .post('/products', ProductsController.create)
    .put('/products/:id', ProductsController.update)
    .delete('/products/:id', ProductsController.delete);

Routes.get('/Products/use/:id', ProductsController.store)
    .post('/Products/use/:id', ProductsController.remove);

export default Routes;