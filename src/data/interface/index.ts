export interface Option {
  id: string;
  name: string;
}

export type CompanyInfo = {
  id: number;
  name: string;
  image: string;
  branch: string;
  scale: string;
  description: string;
  address: string;
  webUrl: string;
  email: string;
  phone: string;
  status: string;
};

export type RecruiterJobCardProps = {
  id?: string;
  title?: string;
  dueDate?: string;
  hotJob?: boolean;
};

export type JobDetailType = {
  id: string;
  title: string;
  description: string;
  benefit: string;
  requirement: string;
  salaryRange: Option;
  position: Option;
  location: Option;
  company: CompanyInfo;
  field: Option;
  major: Option;
  experienceRange: Option;
  slots: number;
  isHot: boolean;
  workMode: Option;
  createdAt: string;
  restAppliedDays: number;
  locationId: number;
  updatedAt: string;
  createdBy: string;
  view: number;
  applyNumber: number;
  likeNumber: number;
  deadline: string;
  status: string;
  workTime: string;
  workLocation: string;
};

export type CandidateJob = {
  id?: string;
  title?: string;
  companyName?: string;
  companyLogo?: string;
  locationId?: string;
  salaryRange?: string;
  deadline?: number;
  companyImage?: string;
  isFavorite?: boolean;
  restAppliedDays?: number;
  isHot?: boolean;
  status?: string;
};

export type UserProfile = {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  avatar: string;
};

export type ListJobs = {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  pageSize: number;
  listData: CandidateJob[];
};

export type SidebarItemType = {
  tabIndex: number;
  content: string;
  icon: JSX.Element;
};
