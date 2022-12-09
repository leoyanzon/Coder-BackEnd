import mongoose from 'mongoose'

import productsModel from '../../models/productsMongoose.model.js';

class ProductsClass{
    constructor(){
        this.createConnection();
    }

    async createConnection(){
        try{
            const URL = "mongodb://localhost:27017/ecommerce"
            await mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.info('Mongoose connected');

        }catch(err){
            throw new Error(err);
        }
    }

    async getAllProducts(){
        try{
            const readDocuments = await productsModel.find({}, {nombre:1}).exec();
            console.log(readDocuments);
            return ({
                success: true,
                data: readDocuments
            });
        } catch (err){
            console.error("falla");
            return ({
                success: false,
                data: err.message
            });
        }

    }

    async createProduct(data){

        const productMock = {
            nombre:"producto 1",
            descripcion:"La descripcion del producto 1",
            price:10,
            codigo:31223,
            thumbnail:"https://cdn1.iconfinder.com/data/icons/city-flat-2/512/people_person_man_stand_men-512.png",
            stock:100,
            uuid:"514a733d-c962-4e52-821e-767ff404ba69",
            timestamp: Date.now()
        }

        try{
            const newProduct = new productsModel(productMock);
            const product = await newProduct.save();
            return ({
                success: true,
                data: `Product ${data.uuid} created successfully`
            });
        } catch (err){
            console.error(err);
            return ({
                success: false,
                data: err.message
            });
        }
    }
}

export default ProductsClass;