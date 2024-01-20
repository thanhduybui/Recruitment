import { useEffect, useState } from "react";
import api from "@utils/axios";
import { UserProfile } from "@data/interface";
import { getAccessToken } from "@utils/authUtils";

export default function useUserProfile() {
  const [profile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/profile", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });

        const userProfile = res.data.data.profile as UserProfile;

        setUserProfile(userProfile);
      } catch (error) {
        console.error("Lỗi khi lấy data user profile", error);
      }
    };
    fetchProfile();
  }, []);

  return profile;
}
