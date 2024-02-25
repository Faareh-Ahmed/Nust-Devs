import express from "express";
import postRoutes from './routes/post.js'
import authRoutes from './routes/auth.js'

const app = express();

app.use(express.json());

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);

app.get("/api", (req,res) => {
	return res.send("jsdkns");
});

app.listen(5000, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT ", 5000);
});
