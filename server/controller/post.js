import { db } from '../db.js'

// export const addPost = (req, res) => {
//     const q = "Select * from Places where id = ?"
//     db.query(q, [req.body.place_id], (err, data) => {
//         if(err) return res.json(err);
//         if(data.length != 0){
//             const q = "Insert into Places "
//         }


//         const mainQuery = "Insert into Places(id, name, location, postal_code, place_category) Values(?,?,?,?,?)";
//         db.query(q, [req.body.place_id, req.body.name, req.body.location, req.body.postal_code, req.body.place_category], (err, data) =>{
//             if(err) return res.json(err);
    
//         })


//     })
//     return res.json("Post added");
// }

export const addPost = (req, res) => {
    
    const checkReviewQuery = "SELECT * FROM Reviews WHERE user_id = ? AND place_id = ?";
    db.query(checkReviewQuery, [req.body.user_id, req.body.place_id], (err, reviewData) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (reviewData.length !== 0) {
            
            return res.status(400).json("Review for this place already exists.");
        }

        // Check if the place exists
        const checkPlaceQuery = "SELECT * FROM Places WHERE id = ?";
        db.query(checkPlaceQuery, [req.body.place_id], (err, placeData) => {
            if (err) {
                return res.status(500).json(err);
            }

            if (placeData.length === 0) {
                const insertPlaceQuery = "INSERT INTO Places (id, name, location, postal_code, place_category) VALUES (?,?,?,?,?)";
                const { place_id, name, location, postal_code, place_category } = req.body;
                db.query(insertPlaceQuery, [place_id, name, location, postal_code, place_category], (err, result) => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                    insertReview(req, res);
                });
            } else {
                insertReview(req, res);
            }
        });
    });
};

function insertReview(req, res) {
    const insertQuery = "INSERT INTO Reviews (user_id, reviews, ratings, place_id) VALUES (?,?,?,?)";
    const { user_id, reviews, ratings, place_id } = req.body;
    db.query(insertQuery, [user_id, reviews, ratings, place_id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json("Review added successfully.");
    });
}

