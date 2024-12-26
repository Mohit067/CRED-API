export const errorResponse = (error) => {
    console.log(error);
    if(error.status){
        return res.status(error.status).json({
            message: error.message,
            success:false
        })
    }
    return res.status(500).json({
        message: "Internal server error",
        success: false
    })
}