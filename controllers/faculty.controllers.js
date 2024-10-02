const Faculty = require("../model/schema.js");

const getMembersCount = async (req, res) => {
  try {
    const membersLength = await Faculty.countDocuments().length;

    res.status(200).json(membersLength);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getQualifiedMembers = async (req, res) => {
  try {
    const { qualification } = req.params;
    const members = await Faculty.find({ qualification });

    members.length === 0
      ? res.status(404).json({
          message: `no member with ${qualification} qualification was found`,
        })
      : res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createMembers = async (req, res) => {
  try {
    const memberData = req.body;
    const newMember = await Faculty.create(memberData);

    res.status(201).json({ newMember });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateMember = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const memberData = req.body;
    const updatedMember = await Faculty.findByIdAndUpdate(id, memberData, {
      new: true,
    });

    updatedMember
      ? res.status(202).json(updatedMember)
      : res.status(404).json({ message: "user not found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteMember = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const deleteMember = await Faculty.findByIdAndDelete(_id);

    deleteMember
      ? res.status(202).json({ message: "user deleted successfully" })
      : res.status(404).json({ message: "user not found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteMembersBasedOnAge = async (req, res) => {
  try {
    const { age } = req.params;

    const deleteMembers = await Faculty.deleteMany({ age });
    deleteMembers.deletedCount>0
      ? res.status(202).json({
          message: `members with the age of ${age} were deleted successfully`,
        })
      : res
          .status(404)
          .json({ message: `members with the age of ${age} were not found` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getMembersCount,
  getQualifiedMembers,
  createMembers,
  updateMember,
  deleteMember,
  deleteMembersBasedOnAge,
};
