import App from './app';
import { db } from '../db/db';
import IRepository from '../db/repository';
import ServiceManager from '../services/serviceManager';

const repo: IRepository = db;
const manager: ServiceManager = new ServiceManager(repo);
new App([
]);