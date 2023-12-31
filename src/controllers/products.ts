import { ObjectId } from "mongodb";
import { Request, Response } from "express";
import { getDb } from "../models";

export const addProduct = async (req: Request, res: Response) => {
  /*    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Adding new user.',
                schema: {
                    $name: 'Product name',
                    $description: "Add new product",
                    $price: 0.00
                    $imageUrl: "https://unsplash.com/photos/7AqEJhsK0eM"
                }
        } */
  try {
    const db = getDb();
    // console.log("Db", db);
    const result = await db.collection("products").insertOne(req.body);
    res.status(201).json({ id: result.insertedId }); // 201 Created
    // res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};

export const getProducts = async (req: Request, res: Response) => {
  /* #swagger.responses[200] = {
                schema: [
                  {
                    $name: 'Product name',
                    $description: "Add new product",
                    $price: 0.00
                    $imageUrl: "https://unsplash.com/photos/7AqEJhsK0eM"
                }
              ]
        } */
  try {
    const db = getDb();
    console.log("Db", db.collection);
    const result = await db.collection("products").find({}).toArray();
    res.status(200).json(result); // 200 OK
  } catch (err) {
    // next(err);
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};

export const getProductById = async (req: Request, res: Response) => {
  /* #swagger.responses[200] = {
                schema: {
                    $name: 'Product name',
                    $description: "Add new product",
                    $price: 0.00
                    $imageUrl: "https://unsplash.com/photos/7AqEJhsK0eM"

                }
        } */
  /*
      #swagger.responses[404] = {
                schema: {
                    message: 'Product not found',
                }
        } */
  const { id } = req.params;
  const productID = new ObjectId(id);
  try {
    const db = getDb();
    const result = await db.collection("products").findOne({ _id: productID });
    if (result) {
      res.status(200).json(result); // 200 OK
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    // next(err);
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  /* #swagger.responses[204] = {
                schema: {
                    message: 'Product updated successfully',
                }
        } */
  /*  #swagger.responses[400] = {
                schema: {
                    message: 'Product id is required',
                }
     
        } */
  /*  #swagger.responses[404] = {
                schema: {
                    message: 'Product not found',
                }
        } */
  /*    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Adding new user.',
                schema: {
                    $name: 'Product name',
                    $description: "Add new product",
                    $price: 0.00
                    $imageUrl: "https://unsplash.com/photos/7AqEJhsK0eM"
                }
        } */
  const { id } = req.params;
  const productID = new ObjectId(id);
  console.log("productID", productID);
  console.log("req.body", req.body);
  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .updateOne({ _id: productID }, { $set: req.body });
    console.log("result", result);
    if (result.matchedCount > 0) {
      // res.status(202).json({ message: "Updated" }); // 204 No Content
      res.status(204).end(); // 204 No Content
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    // next(err);
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  /* 
      #swagger.responses[404] = {
                schema: {
                    message: 'Product not found',
                }
        } */
  /*
      #swagger.responses[204] = {
                schema: {
                    message: 'Product deleted successfully',
                }
        } 
        */
  /*
        #swagger.responses[400] = {
                schema: {
                    message: 'Product id is required',
                }
        } 
        } */
  const { id } = req.params;
  const productID = new ObjectId(id);

  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .deleteOne({ _id: productID });
    if (result.deletedCount > 0) {
      res.status(204).end(); // 204 No Content
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};
