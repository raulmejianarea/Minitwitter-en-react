import { db } from '../config/config';
import { CrudService } from './CrudService';
import { UserComment } from '../models/Comment';

// TODO: implement service
export class CommentService implements CrudService<UserComment> {


    findById(id: string): Promise<UserComment> {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM comment WHERE id=?";
            const values = [id];

            db.query(query, values)
                .then(rows => {
                    if (rows && rows.length > 0) {
                        resolve(rows[0])
                    } else reject({ error: "Not found" })
                })
                .catch(err => {
                    console.log(err.message);
                })
        })
    }

    findAll(offset = 0): Promise<UserComment[]> {
        return new Promise((resolve, reject) => {
            const query = "SELECT *  FROM comment LIMIT?, 5";
            const values = [offset]
            db.query(query, values)
                .then(rows => {
                    rows.map(e => {
                        return e;
                    });

                })
                .catch(err => {
                    console.log(err.message);
                });
        })
    }

    likeOne(postId: string, userId: string): Promise<UserComment> {
        return new Promise((resolve, reject) => {
            const query = `
            INSERT INTO
            posts_have_likes(post_id, user_id)
            VALUES(?, ?)
            `;

            const values = [postId, userId];

            db.query(query, values)
                .then(rows => {
                    if (rows && rows.affectedRows > 0) {
                        resolve({ id: rows.insertId })
                    } else reject({ error: "Not found" })
                })
                .catch(err => {
                    console.log(err.message);
                    reject({ error: "Not found" })
                })
        });
    }

    dislikeOne(postId: string, userId: string): Promise<UserComment> {
        return new Promise((resolve, reject) => {
            const query = `
            DELETE FORM post_have_likes
            WHERE post_id=? AND user_id=?
            `;
            const values = [postId, userId];
            db.query(query, values)
                .then(rows => {
                    if (rows && rows.affectedRows > 0) {
                        resolve({ id: postId })
                    } else reject({ error: "Not found" })
                })
                .catch(err => {
                    reject({ error: err.message });
                })
        });
    }

    async createOne(newComment: UserComment): Promise<UserComment> {
        try {
            const query = `INSERT INTO
            comments(content, post_id, user_id)
            VALUES(?, ?, ?)`;
            const values = [
                newComment.content,
                newComment.postId,
                newComment.userId
            ];

            const insert = await db.query(query, values);
            const insertedComment = await this.findById(insert.id);
            return insertedComment;
        } catch (err) {
            console.log(err.message);
            throw { error: err.message };
        }
    }

    updateOne(id: string, updateComment: UserComment): Promise<UserComment> {
        return new Promise((resolve, reject) => {

            const sel = `
            UPDATE comments
            SET contenido = COALESCE(?, content),
            picture = COALESCE(?, picture)
            likes = COALESCE(?, likes)
            WHERE id=?`;

            const values = [
                updateComment.content,
                updateComment.picture,
                updateComment.likes
            ];
        })
    }

    deleteOne(id: string): Promise<UserComment> {
        return new Promise((resolve, reject) => {
            const sel = 'DELETE FROM comments WHERE id=?'
            const values = [id];
            db.query(sel, values)
                .then(rows => {

                    if (rows && rows.affectedRows > 0) {
                        resolve({ id: id })
                    } else reject({ error: "Not found" })
                })
                .catch(err => {
                    console.log(err.message);
                    reject({ error: "Not found" })
                })
        })
    }


}