import Book from "../models/book.js";


export const addbook=async(req,res)=>{
    const newbook=new Book(req.body);
    try{
        const savedbook= await newbook.save()
        res.status(200).json(savedbook);
    }
    catch(err)
    {
        res.json(err);
    }
}
export const getbook=async(req,res)=>{
    try{
        const details= await Book.find()
        res.status(200).json(details);
    }
    catch(err)
    {
        res.json(err);
    }
}