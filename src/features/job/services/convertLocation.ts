import api from "@utils/axios";

export default async function convertLocation(id: string) {
  let result = "Đang cập nhật";

  try {
    const res = await api.get(`/locations/${id}`);
    result = res.data && res.data.data && res.data.data.location.name;
    return result;
  } catch (err) {
    console.log(err);
    return result;
  }
}
