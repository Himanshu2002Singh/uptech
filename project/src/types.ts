// type.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  price: string;
  category: string;
  syllabus: string[];
  what_you_learn: string[];
  prerequisites: string[];
  certification: string;
}


export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}