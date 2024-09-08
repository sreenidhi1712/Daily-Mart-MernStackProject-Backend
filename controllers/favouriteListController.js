import userModel from "../models/userModel.js";

// Add items to user FavouriteList
// const addToFavouriteList = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     const favouriteListData = req.body.favourite;
//     await userModel.findByIdAndUpdate(userData._id, { favouriteListData });
//     res.json({ success: true, message: "Added to favourite List" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Error!" });
//   }
// };

const addToFavouriteList = async (req, res) => {
  const { userId, favourite } = req.body;

  if (!userId || !favourite) {
    return res.status(400).json({ success: false, message: "User ID and favourite item are required" });
  }

  try {
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    userData.favouriteItem = favourite;
    await userData.save();

    res.json({ success: true, message: "Favourite list updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating favourite list" });
  }
};




export { addToFavouriteList };