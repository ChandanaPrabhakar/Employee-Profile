import StaffProfile, { StaffDataInterface } from "../models/staffModels";

//Post staff profile data service
export const postStaffDataService = async (
  staffDetails: StaffDataInterface
) => {
  try {
    const NewStaff: StaffDataInterface = new StaffProfile(staffDetails);
    const data: StaffDataInterface = await NewStaff.save();

    if (!data) {
      return {
        success: false,
        status: 400,
        message: "Data is incomplete",
      };
    }

    return {
      success: true,
      status: 201,
      message: "Staff Profile Added Successfully",
      data: data,
    };
  } catch (error) {
    console.error("Something went wrong", error);
    throw new Error("Failed to create user");
  }
};

//Get all staff list service
export const getAllStaffListService = async () => {
  try {
    const staffList = await StaffProfile.find().select(
      "_id firstName lastName workplace jobPosition"
    );

    if (!staffList) {
      return {
        success: false,
        status: 404,
        message: "No Staff Profiles Found",
      };
    }
    return {
      success: true,
      status: 200,
      message: "Fetched Staff Profiles List Successfully",
      data: staffList,
    };
  } catch (error) {
    console.error("Something went wrong", error);
    throw new Error("Failed to fetch staff profile list");
  }
};

//Get staff profile details service
export const getStaffProfileService = async (id: string) => {
  try {
    const staffProfile: StaffDataInterface | null = await StaffProfile.findById({
      _id: id,
    });

    if (!staffProfile) {
      return {
        success: false,
        status: 404,
        message: "Staff Profile Not Found",
      };
    }
    return {
      success: true,
      status: 200,
      message: "Staff Profile Fetched Successfully",
      data: staffProfile,
    };
  } catch (error) {
    console.error("Something went wrong", error);
    throw new Error("Failed to find staff profile");
  }
};
