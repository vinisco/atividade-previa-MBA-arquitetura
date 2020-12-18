import axios from "axios";

const UserApi = {
  postUser: async function (name, email, password) {
    const res = await axios.post("http://localhost:8000/users", {
      name,
      email,
      password,
    });
    return res.data;
  },

  getUser: async function (email, password) {
    const res = await axios.get(
      `http://localhost:8000/users?email=${email}&password=${password}`
    );
    return res.data;
  },
  getUserByEmail: async function (email) {
    const res = await axios.get(`http://localhost:8000/users?email=${email}`);
    return res.data;
  },

  getUsers: async function () {
    const res = await axios.get("http://localhost:8000/users");
    return res.data;
  },
};

export default UserApi;
