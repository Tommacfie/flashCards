import { Request, Response } from 'express';

import User from '../models/user';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users).status(200);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.find({ _id: req.query.id });
    res.send(user).status(200);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser).status(201);
    return;
  } catch (error) {
    console.log('error:', error);
    res.send(error).status(500);
    return;
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    res.send(updatedUser).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: req.query.id });
    res.send(deletedUser).status(200);
    return;
  } catch (error) {
    console.log('error: ', error);
    res.send(error).status(500);
    return;
  }
};
