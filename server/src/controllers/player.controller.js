import { paginate } from "../models/player.model"

// exports.createPost = async function(req, res) {
//   let newPost = new Post({
//     title: req.body.title,
//     content: req.body.content
//   })

//   try {
//     await newPost.save(function(err) {
//       if (err) {
//         throw Error("Error while creating new post")
//       }
//     })
//     return res.status(201).json({ status: 201, data: newPost, message: "Post criado com sucesso!" })
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: "Houve uma falha na criação do post." })
//   }
// }

const getPlayers = async (req, res) => {
  const { page, limit, filterBy, orderBy } = req.query
  let params = {
    page: page ? page : 0,
    limit: limit ? limit : 10,
    filterBy: filterBy ? filterBy : "level",
    orderBy: orderBy ? orderBy : "DESC"
  }

  try {
    const result = await paginate(params)
    const { players: data, maxRows } = result
    return res.status(200).json({ status: 200, data, maxRows, message: "Players recebidos com sucesso!" })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

// exports.getPostDetail = async function(req, res) {
//   try {
//     Post.findById(req.params.id, function(err, post) {
//       if (err) {
//         throw Error("No post with this id")
//       }

//       return res.status(201).json({ status: 201, data: post })
//     })
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: "Não foi possível encontrar o post solicitado." })
//   }
// }

// exports.updatePost = async function(req, res) {
//   try {
//     Post.findOneAndUpdate(req.params.id, { $set: req.body }, function(err, post) {
//       if (err) {
//         throw Error("Cannot update post")
//       }

//       return res.status(201).json({ status: 201, data: req.body, message: "Post atualizado com sucesso!" })
//     })
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: "Não foi possível atualizar esse post." })
//   }
// }

// exports.deletePost = async function(req, res) {
//   try {
//     Post.findByIdAndRemove(req.params.id, function(err) {
//       if (err) {
//         throw Error("Cannot delete post")
//       }

//       return res.status(201).json({ status: 201, data: req.body, message: "Post removido com sucesso!" })
//     })
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: "Não foi possível remover esse post." })
//   }
// }

export { getPlayers }
