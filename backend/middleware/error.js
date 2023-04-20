const ErrorResponse=require("../utils/errorResponse");

const errorHandler=(err,req,res,next)=>{
    let error = {...err};
    error.message=err.message;

    if(err.name==="castError"){
        const message =`Response not found ${err.value}`;
        err=new ErrorResponse(message,404);
    }


    // MOngoose duplicate value
    if(err.name===11000){
        const message ="Duplicate field entered";
        err=new ErrorResponse(message,404);
    }

    //Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => ' ' + val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "server error"
    })

}
module.exports=errorHandler;