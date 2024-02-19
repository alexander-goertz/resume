import express from "express";
import { getTable } from "./../db.mjs";

const router = express.Router();

router.get("/work-experience", async (req, res) => {
    try {
      const workExperience = await getTable("work_experience");
      res.send(workExperience.Items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
router.get("/personal-info", async (req, res) => {
    try {
      const personalInfo = await getTable("personal_info");
      res.send(personalInfo.Items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  export default router 