import { Router } from "express";
import { getFeeds } from 'controllers/feeds';
import validateQueryParams from 'utility/valiateQueryParams';

const router = Router();

// @route GET /feeds
// @desc Fetch feeds from file
// @access PUBLIC
router.get("/", validateQueryParams(['page']), getFeeds);

export default router;
