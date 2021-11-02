import { Router, Request, Response } from "express";
import { getFeeds } from 'controllers/feeds';

const router = Router();

// @route GET /feeds
// @desc Fetch feeds from file
// @access PUBLIC
router.get("/", (req: Request, res: Response) => {
    res.json(getFeeds());
});

export default router;
