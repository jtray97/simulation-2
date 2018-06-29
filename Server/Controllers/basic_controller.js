module.exports = {
    read:function(req, res){
       req.app.get('db').readAll().then(response=>res.send(response))
    },
    create:function(req, res){

    },
    update:function(req, res){

    },
    delete:function(req, res){

    },
}