import { ProductMemoryStorage } from "./application/database/ProductMemorySource";
import { UserMemoryStorage } from "./application/database/UserMemoryStorage";
import { OrderRepositoryImpl } from "./application/repository/OrderRepositoryImpl";
import { ProductRepositoryImp } from "./application/repository/ProductRepository";
import { UserRepositoryImp } from "./application/repository/UserRepository";
import { AddProductToTheOrder } from "./application/use-cases/Order/addProductOrder";
import { CreateAnOrder } from "./application/use-cases/Order/createAnOrder";
import { RemoveProductOrder } from "./application/use-cases/Order/removeProduct";
import { FilterAndSortProductsUseCase } from "./application/use-cases/Product/FilterAndSortProducts";
import { GetAllProduct } from "./application/use-cases/Product/GetAllProduct";
import { GetOneProduct } from "./application/use-cases/Product/GetOneProduct";
import { InsertManyProduct } from "./application/use-cases/Product/InsertManyProduct";
import { InsertOneProduct } from "./application/use-cases/Product/insertOneProduct";
import { FindUserUseCase } from "./application/use-cases/User/findUser";

// Database
const productMemoryStorage = new ProductMemoryStorage();
const userMemoryStorage = new UserMemoryStorage();

// Repositories
const productRepository = new ProductRepositoryImp(productMemoryStorage);
const orderRepository = new OrderRepositoryImpl(productMemoryStorage);
const userRepository = new UserRepositoryImp(userMemoryStorage);

// Product Use Cases
export const getAllProductUseCase = new GetAllProduct(productRepository);
export const getOneProductUseCase = new GetOneProduct(productRepository);
export const insertManyProductUseCase = new InsertManyProduct(
  productRepository
);
export const insertOneProductUseCase = new InsertOneProduct(productRepository);

// Order Use Cases
export const addProductToTheOrderUseCase = new AddProductToTheOrder(
  orderRepository
);
export const createAnOrderUseCase = new CreateAnOrder(orderRepository);
export const removeProductOrderUseCase = new RemoveProductOrder(
  orderRepository
);

export const findUserUseCase = new FindUserUseCase(userRepository);

export const filterAndSortProduct = new FilterAndSortProductsUseCase();
