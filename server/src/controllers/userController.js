import User from "../models/userModel.js";
import bcript from 'bcrypt'

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      message: "User Get Successfully",
      users,
    });
  } catch (error) {
    res.status(404).send({
      success: true,
      error,
    });
  }
};

export const createUser = async (req, res, next) => {
       try {
        const users = new User(req.body);
        await users.save();
        res.status(201).send({
            success:true,
            message:"User Created Successfully",
            users
        })
       } catch (error) {
        res.status(400).send({
            success:false,
            message:"User Not Created",
            error,
        })
       }
};

export const getUserById = async (req,res)=>{
       try {
        const users = await User.findById(req.params.id);
        if(!users){
            res.status(404).send({
               success:true,
               message:"User Not Found",
            })
        }
        res.status(200).send({
            success:true,
            message:"User Found Successfully",
            users
         })
       } catch (error) {
         res.status(500).send({
            success:false,
            message:"Internal Server Error",
            error
         })
       }
};

export const deleteUser = async(req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            res.status(404).send({
                success:false,
                message:"User Not Found",
            })
        }
        res.status(200).send({
            success:true,
            message:"User Deleted Successfully",
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Internal Server Error",
            error
        })
    }
}

export const updateUser = async (req,res)=>{
       try {
        const userId = req.params.id;
       const userData = req.body;

       const updatedUser = await User.findByIdAndUpdate(userId,userData,{new:true});
       if(!updatedUser){
        res.status(404).send({
            success:false,
            message:"User Not Found",
        })
       }
       res.status(200).send({
        success:true,
        message:"User Updated Successfully",
        updatedUser
       })
       } catch (error) {
        res.status(500).send({
            success:false,
            message:"Internal Server Error",
            error
        })
       }
}