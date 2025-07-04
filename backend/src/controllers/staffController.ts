import { Request, Response } from "express";
import {
  getAllStaffListService,
  getStaffProfileService,
  postStaffDataService,
} from "../services/staffServices";

//Post staff profile data controller
export const postStaffDataController = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const result = await postStaffDataService(data);

    if (!result.success) {
      res.status(result.status).json({ message: result.message });
      return;
    }

    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
    return;
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

//Get list of all staff profiles controller
export const getAllStaffListController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getAllStaffListService();

    if (!result.success) {
      res.status(result.status).json({ message: result.message });
      return;
    }
    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
    return;
  } catch (error) {
    console.error("Somethig went wrong", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

//Get staff profile data controller
export const getStaffProfileController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const result = await getStaffProfileService(id);

    if (!result.success) {
      res.status(result.status).json({ message: result.message });
      return;
    }

    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
    return;
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
