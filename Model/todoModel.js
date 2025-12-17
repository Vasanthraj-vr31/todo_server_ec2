import mongoose  from "mongoose";

const todoSchema = mongoose.Schema({
    todo : { type : String,require:true,unique:true}

})

const todoCollection = mongoose.model("todo",todoSchema)

export default todoCollection;