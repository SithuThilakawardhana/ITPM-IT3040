const router = require("express").Router();
let donatorReg = require("../routes/donatorReg");

//create
router.route("/add").post((req,res)=>{          //http:/localhost:8070/donatorReg/add             //inser /create data implementation - exception handling
    const tname = req.body.tname;
    const mname = req.body.mname;

    const newStd = new Std({
        tname,
        mname
    })

    newdonatorReg.save().then(() =>{
        res.json("donatorReg added")
    }).catch((err)=>{
        console.log(err);
    })
})
//read implementaion
//http://localhost:8070/donatorReg

router.route("/").get((req,res)=>{

    Std.find()then((donatorReg)=>{
        res.json(donatorReg)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data in the database
//http://localhost:8070/donatorReg/update/dggfhgfhjgjdsfdgf

router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const{tname, mname} = req.body;

    const updatedonatorReg = {
        tname,
        mname
    }

    const update = await donatorReg.findByIdAndUpdate(userId, updatedonatorReg).then(() =>{
        res.status(200).send({status: "User updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})

//delete data implementation from database
//http://localhost:8070/donatorReg/delete/dggfhgfhjgjdsfdgf
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await donatorReg.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted", error:err.message});
    })
})

//fetch/read data of one user only
router.route("/get:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Std.findById(userId)
    .then(() => {
        res.status(200).send({status: "user fetched", user: user})
    }).catch(() => {
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})





module.export = router;