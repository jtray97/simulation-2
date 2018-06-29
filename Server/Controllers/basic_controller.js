module.exports = {
    read:function(req, res){
       req.app.get('db').readAll().then(response=>res.send(response))
    },
    create:function(req, res){
        const {name, address, city, state, zip} = req.body
        req.app.get('db').addOne([name, address,city,state,zip]).then(houses=>res.send(houses))
    },
    update:function(req, res){

    },
    delete:function(req, res){
        var {id} = req.params
        req.app.get('db').deleteOne([id])
        // .then(response=>res.send(response))

    },
}