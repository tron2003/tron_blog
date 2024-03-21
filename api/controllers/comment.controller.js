// import Comment from "../models/comment.model.js";

// export const createComment = async (req, res, next) => {
//   try {
//     const { content, postId, userId } = req.body;
//     if (userId !== req.user.id) {
//       return next(
//         errorHandler(403, "You are Comment not posted due UnAuthorized action")
//       );
//     }

//     const newComment = new Comment({
//       content,
//       postId,
//       userId,
//     });
//     await newComment.save();
//     res.staus(200).json(newComment);
//   } catch (error) {
//     next(error);
//   }
// };
// };
import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};
