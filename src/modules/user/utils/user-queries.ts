export const queries = {
  getAllUsers: "SELECT * FROM users",
  createUser:
    "INSERT INTO users(id, email, password) VALUES ($1, $2, $3) RETURNING *",
};
