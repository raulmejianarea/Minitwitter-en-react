
import express, { Router, Request, Response, NextFunction } from 'express';
import { PostService } from '../services/PostService';
import { Post } from '../models/Post';
import { request } from 'https';
import passport from 'passport';

const service: PostService = new PostService();
const router: Router = express.Router();

// TODO: implement router

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    service.findAll()
        .then(Posts => res.status(200).json(Posts))
        .catch(err => res.status(404).json(err));
})
router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const post = req.body;
    service.createOne(post)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json(err));
})
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    service.findById(id)
        .then(Posts => res.status(200).json(Posts))
        .catch(err => res.status(404).json(err));
})
router.put("/:id", passport.authenticate("jwt", { session: false }), (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const updatepost = req.body;
    service.updateOne(id, updatepost)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json(err));
})
router.delete("/:id", passport.authenticate("jwt", { session: false }), (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    service.deleteOne(id)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json(err));

})
router.get("/:id/like", passport.authenticate("jwt", { session: false }), (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const { user } = req;
    service.likeOne(id, user.id)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(404).json(err));
});
router.delete("/:id/like", passport.authenticate("jwt", { session: false }), (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const { user } = req;
    service.dislikeOne(id, user.id)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(404).json(err));
});
export default router;
