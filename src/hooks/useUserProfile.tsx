import { useEffect, useState, useCallback } from "react";
import api from "@utils/axios";
import { UserProfile } from "@features/recruiter/recuiterInfo";
import { getAccessToken } from "@utils/authUtils";

export default function useUserProfile() {
  const [profile, setUserProfile] = useState<UserProfile | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      const res = await api.get("/users/profile", {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });

      const userProfile = res.data.data.profile as UserProfile;

      setUserProfile(userProfile);
    } catch (error) {
      console.error("Lỗi khi lấy data user profile", error);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return profile;
}
