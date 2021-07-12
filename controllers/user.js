const { response, request } = require("express");

const userGet = (req = request, res = response) => {

  const params = req.query;

  res.json({
    msg: "get API Controller",
    query
  });
};

const userPut = (req, res = response) => {

  //
  const id = req.params.id;

  res.json({
    msg: "put API Controller",
    id
  });
};

const userPost = (req, res = response) => {
  //Show response from post req
  const body = req.body;

  res.json({

    msg: "post API Controller",
    body
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API Controller",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete
};
