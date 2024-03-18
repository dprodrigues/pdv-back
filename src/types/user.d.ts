import { SystemRole } from "@/types/system";

interface UserCompany {
  id: string;
  role: string;
}

export interface User {
  email: string;
  id: string;
  last_name: string;
  name: string;
  password: string;
  role: SystemRole;
  company: UserCompany;
}
