const createUserOnDataBase = async (id: string, data: any) => {
  console.log(id, data);
  const postData = await fetch(
    `https://react-ho-b122c-default-rtdb.firebaseio.com//users/${id}/info.json`,
    {
      method: "PATCH",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(data),
    }
  );
  return postData;
};

export default createUserOnDataBase;
