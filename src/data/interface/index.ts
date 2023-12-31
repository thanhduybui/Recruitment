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
  company: Option;
  field: Option;
  major: Option;
  experienceRange: Option;
  slots: number;
  isHot: boolean;
  workMode: Option;
  createdAt: string;
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
