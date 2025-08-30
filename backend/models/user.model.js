import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default:
                "/imgs/vecteezy_user-icon-on-transparent-background_19879186.png",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
