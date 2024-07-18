module.exports = async (srv) => {
    srv.on('greetings', (req,res) => {
        return "good morning!" + req.data.name;
    })

    srv.on('multiply', (req,res) => {
        return req.data.a * req.data.b;
    })
}