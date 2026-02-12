import User from "../models/user.js";

export const getUserIncome = async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findOne(
      { user_id: userId },
      { "profile.income": 1, _id: 0 }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      income: user.profile?.income || 0
    });

  } catch (error) {
    console.error("Error fetching income:", error);
    res.status(500).json({ error: "Server error" });
  }
};
