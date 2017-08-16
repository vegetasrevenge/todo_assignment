const router = require('express').Router();
//requiring the exported functions from the model todo.js file
const Todo = require('../models/todos');


router.get('/todos', function(req, res) {
  Todo.find({}).then(function(results) {
    res.render('index', { todos: results })
  })
});

router.post('/todos/:id/deleted', function(req, res) {
  let todoId = req.params.id;
  Todo.remove({ _id: todoId }).then(function(result){
    res.redirect('/todos');
  })
  // //OR use
  // //Todo.deleteOne({ _id: req.params.id}.then(function(){
  // res.redirect('/todos');
  // })
});

router.post('/todos', function(req, res) {
  // todosModel.insert(req.body, function(err, result){
  //   res.redirect('/todos')
  // })
  let newTodo = new Todo(req.body);
  newTodo.save().then(function(result){
    console.log(result);
    res.redirect('/todos');
  }).catch(function(err){
    console.log(err)
    res.redirect('/todos');
  });
});
//
// router.post('/todos/delete/:id', function(req, res) {
//   //see the .remove? it is referenced in the models todo.js file
//   //under module.exports
//   todosModel
//   .remove(req.params.id, function(err, result){
//     res.redirect('/todos');
//   })
// });

module.exports = router;

//the next idea is if(err) throw err
//in the dev stage, this can help with preventing unseen errors from being deployed
