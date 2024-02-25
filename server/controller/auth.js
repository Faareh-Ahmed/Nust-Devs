import {db} from '../db.js';
import bcrypt from 'bcrypt';

export const register = (req, res) => {
    // Check if user already exists

    const q = "select * from Users where email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if(err) return res.json(err)
        if(data.length > 0) return res.status(409).json("User Already Exist")

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const insertQuery = 'insert into Users(first_name, last_name, email, phone_number, password) Values(?,?,?,?,?)';
        const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.number, hash];
        
        db.query(insertQuery, values, (err, data) => {
            if(err) return res.json(err)
            if(data){
                return res.status(201).json("User has been created Successfully!");
            }
        })
    });

};

export const login = (req, res) => {
    //Check user exist or not
    const q = 'select * from Users where email = ?'
    db.query(q, [req.body.email], (err, data) => {
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("User not found!");

        console.log("Data: ",data);
        //Check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            data[0].password
        );
        
        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")
        return res.status(200).json("Successfully Logged In")
        
        // const token = jwt.sign({id: data[0].id}, "jwtkey");
        // // const { password, ...hehe } = data[0];
        
        // res.cookie("access_token", token, {
        //     httpOnly:true,
        //     sameSite:'None',
        //     secure:true
        // }).status(200).json(data);
    })
}

// export const logout = (req, res) => {
//     res.clearCookie("access_token", {
//         sameSite: "none", 
//         secure: true
//     })
//     .status(200)
//     .json("User has been logged out");
// }