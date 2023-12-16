import UserDataRow from "./UserDataRow";

const userData = [
  {
    id: "20011",
    name: "John Doe",
    email: "johndoe@gmail.com",
    date: "2015-03-25",
    role: "Admin",
  },
];

const additionalUsers: typeof userData = [];

for (let i = 1; i <= 10; i++) {
  additionalUsers.push({
    id: (parseInt(userData[0].id) + i).toString(),
    name: `User ${i}`,
    email: `user${i}@example.com`,
    date: "2023-12-15", // Update the dates as needed
    role: "User",
  });
}

export default function UserDataList() {
  return (
    <div className="flex flex-col gap-2 mt-4 mb-10 overflow-x-auto">
      <UserDataRow
        isHead={true}
        id="ID"
        name="Tên"
        email="Email"
        date="Ngày tham gia"
        role="Vai trò"
      />
      {additionalUsers.map((userData) => (
        <UserDataRow {...userData} key={userData.id}></UserDataRow>
      ))}
    </div>
  );
}
