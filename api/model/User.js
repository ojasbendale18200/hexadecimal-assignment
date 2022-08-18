import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requird: true,
    unique: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    geo: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
  phone: {
    type: String,
    requird: true,
  },
  website: {
    type: String,
  },
  company: {
    name: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
    bs: {
      type: String,
    },
  },
});

export default mongoose.model("User", UserSchema);
