const { Product_type } = require("./models/product_type");
const { Product } = require("./models/product");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {

        name: "Television", price: 25000,
        imageUrl: "https://images.unsplash.com/photo-1606490102015-697a49636e32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        decscription: "This is TV Description", numberInStock: 12
    },
    {
        name: "Watch",

        imageUrl: "https://images.unsplash.com/photo-1523426366168-ab13c3cccb03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        price: 5000, decscription: "This is Watch Description", numberInStock: 12
    },
    {
        name: "Refrigerator",
        imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: 30000, decscription: "This is Refrigerator Description", numberInStock: 10
    },
    {
        name: "Microwave",
        imageUrl: "https://images.unsplash.com/photo-1565357253897-79d691886a73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 5000, decscription: "This is Microwave Description", numberInStock: 6
    },


    {
        name: "Apple iphone ",
        imageUrl: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        price: 15000,
        decscription: "This is Mobile Description",
        numberInStock: 12
    },
    {
        name: "Laptop",
        imageUrl: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 45000, decscription: "This is Laptop Description", numberInStock: 10
    },
    {
        name: "Mobiles",
        imageUrl: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
        price: 25000, decscription: "This is Mobile Description", numberInStock: 6
    },
    {
        name: "Desktop",
        imageUrl: "https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        price: 30000, decscription: "This is Desktop Description", numberInStock: 6
    },

    {
        name: "Air Conditioner",
        imageUrl: "https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        price: 35000, decscription: "This is AC Description", numberInStock: 12
    },

    {

        name: "Jeans",
        imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 600, decscription: "This is Jeans Description", numberInStock: 12
    },
    {
        name: "Shirt",
        imageUrl: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 500, decscription: "This is Shirt Description", numberInStock: 10
    },
    {
        name: "T-Shirt",
        imageUrl: "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 300, decscription: "This is T-Shirt Description", numberInStock: 6
    },
    {
        name: "Fashion Saree",
        imageUrl: "https://images.unsplash.com/photo-1610189337543-1c5d8e64f574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 1000, decscription: "This is Saree Description", numberInStock: 12
    },

    {

        name: "Shampoo",
        imageUrl: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80",
        price: 150, decscription: "This is Shampoo Description", numberInStock: 12
    },
    {
        name: "Face Wash",
        imageUrl: "https://images.unsplash.com/photo-1609175214983-594001465d18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        price: 70, decscription: "This is Face Wash Description", numberInStock: 10
    },
    {
        name: "Face cream",
        imageUrl: "https://images.unsplash.com/photo-1586179406335-9b7022b30170?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 300, decscription: "This is Face Cream Description", numberInStock: 6
    },
    {
        name: "SunScreen",
        imageUrl: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 250, decscription: "This is SunScreen Description", numberInStock: 12
    },

    {
        name: "Casual Shoes",
        imageUrl: "https://images.unsplash.com/photo-1583979365152-173a8f14181b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80",
        price: 3000, decscription: "This is Shoes Description", numberInStock: 12
    },
    {
        name: "Sport Shoes",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 4500, decscription: "This is sport shoes Description", numberInStock: 10
    },
    {
        name: "Sandal",
        imageUrl: "https://images.unsplash.com/photo-1590099033615-be195f8d575c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
        price: 500, decscription: "This is Sandal Description", numberInStock: 6
    },
    {
        name: "Flats ",
        imageUrl: "https://images.unsplash.com/photo-1619315970522-f9604be23f18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 250, decscription: "This is Flats Description", numberInStock: 12
    }

]

async function seed() {
    await mongoose.connect(config.get("db"));

    await Product.deleteMany({});
    await Product.insertMany(data);
    //await Product_type.deleteMany({});

    // for (let product_type of data) {
    //     const { _id: product_typeId } = await new Product_type({ type: product_type.type }).save();
    //     const products = product_type.product.map(product => ({
    //         ...product,
    //         product_type: { _id: product_typeId, type: product_type.type }
    //     }));
    //     await Product.insertMany(products);
    // }

    mongoose.disconnect();

    console.info("Done!");
}

seed();



