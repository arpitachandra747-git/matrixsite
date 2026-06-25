const User = require("../models/User");
const { PHONE_REGEX, EMAIL_REGEX } = require("../constant");

const Contact = async(req,res) => {

    try {
        if(!req.body){
            return res.status(404).json({message:"Request Body not Found!"});
        }
        
        const allowedFields = ["name","email","phone","message"];

        const requestFields = Object.keys(req.body);
       
        const isValid = requestFields.every((field) => allowedFields.includes(field) );

        
        if(!isValid){

            const fields = allowedFields.map((field) => field.charAt(0).toUpperCase() + field.slice(1));
            const message = fields.length > 0 ? fields.slice(0,-1).join(" , ") + " & " + fields.slice(-1): fields;
            return res.status(400).json({message: `Only ${message} are required!`});
        }

        const {name,email,phone,message} = req.body;
        const errors = {};

        if(!name){
            errors.name = "Name is required!";
        }
        
        if(!email){
             errors.email = "Email is required!";

        }else if (!EMAIL_REGEX.test(email)) {
            errors.email = "Invalid Email!";
        }

        const cleanPhone = phone.replace(/\D/g, "");

        if(!phone){
             errors.phone = "Phone is required!";

        }else if (!PHONE_REGEX.test(cleanPhone)) {
            errors.phone = "Invalid Phone!";
        }

        if(!message){
             errors.message = "Message is required!";
        }

        if(Object.keys(errors).length > 0){
            return res.status(422).json(errors);
        }

        //Duplicate Check
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ email: "Email already exists!" });
        }
                
        const newUser = await new User({
            name,
            email,
            phone,
            message
        });

       await newUser.save();

     return res.status(200).json({message: "Submitted Successfully!",data:newUser});

    } catch (error) {
        
        if (error.code === 11000) {
            return res.status(409).json({ email: "Email already exists!" });
        }
        
        res.status(500).json({error:error.message});
    }
}

module.exports = Contact;