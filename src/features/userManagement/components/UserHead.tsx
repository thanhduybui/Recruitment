import UserGrid from "./UserGrid";

export default function UserHead() {
  return (
    <div className="text-gray-600 font-semibold mt-4">
      <UserGrid>
        <div className="w-1/12">ID</div>
        <div className="w-3/12">Tên</div>
        <div className="w-2/12">Email</div>
        <div className="w-2/12">Vai trò</div>
        <div className="w-4/12">Tuỳ chỉnh</div>
      </UserGrid>
    </div>
  );
}
