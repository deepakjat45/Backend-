const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(() => { console.log("connected to mongodb") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            locition: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);
