export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  joinDate: string;
  status: 'active' | 'inactive';
  avatar?: string;
  performance?: {
    rating: number;
    lastReview: string;
  };
  contact: {
    phone: string;
    address: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  password?:string;
  role: 'admin' | 'user';
}