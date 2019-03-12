const fetchUsers = async () =>
  await await fetch("http://localhost:9000/getYelpReviews", { method: "GET" });
