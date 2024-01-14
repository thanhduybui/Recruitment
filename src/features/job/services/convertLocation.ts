import axios from "axios";

export default async function convertLocation(id: string) {
  let result = "";

  if (!id) return "Chưa xác định";

  try {
    const res = await axios.get(`https://provinces.open-api.vn/api/p/${id}`);
    result = res.data && res.data.name;
    return result;
  } catch (err) {
    console.log(err);
    return result;
  }
}
