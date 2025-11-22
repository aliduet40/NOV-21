import express from "express";
import {
  addMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember
} from "../controllers/memberController.js";

const router = express.Router();

// CRUD routes
router.post("/", addMember);       // Add new member
router.get("/", getAllMembers);    // Get all members
router.get("/:id", getMemberById); // Get member by ID
router.put("/:id", updateMember);  // Update member
router.delete("/:id", deleteMember); // Delete member

export default router;
