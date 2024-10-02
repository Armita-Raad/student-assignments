const { Router } = require("express");
const {
  getMembersCount,
  getQualifiedMembers,
  createMembers,
  updateMember,
  deleteMember,
  deleteMembersBasedOnAge,
} = require("../controllers/faculty.controllers");

const router = Router();

/**
 * @URL: /Faculty/count
 * @Method: GET
 * @Status: Public
 * @Description: count of all faculty members
 */
router.get("/count", getMembersCount);

/**
 * @URL: /Faculty/:qualification
 * @Method: GET
 * @Status: Public
 * @Description: retrieve all faculty members base on their qualification"
 */
router.get("/:qualification", getQualifiedMembers);

/**
 * @URL: /Faculty/
 * @Method: POST
 * @Status: Public
 * @Description: insert new faculty members
 */
router.post("/", createMembers);

/**
 * @URL: /Faculty/:id
 * @Method: PUT
 * @Status: Public
 * @Description: update member
 */
router.put("/:id", updateMember);

/**
 * @URL: /Faculty/:id
 * @Method: DELETE
 * @Status: Public
 * @Description: Delete a member
 */
router.delete("/id/:id", deleteMember);

/**
 * @URL: /Faculty/:age
 * @Method: DELETE
 * @Status: Public
 * @Description: Delete all members based on their age
 */
router.delete("/age/:age", deleteMembersBasedOnAge);

module.exports = router;
