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
}

export const coursesData: Course[] = [
  // CS-IT Courses
  {
    id: 1,
    title: "Python Fundamental",
    description: "Master the basics of Python programming with hands-on projects and real-world applications.",
    instructor: "Alex Johnson",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹4,999",
    category: "cs-it"
  },
  {
    id: 2,
    title: "Advanced Python",
    description: "Take your Python skills to the next level with advanced concepts, frameworks, and best practices.",
    instructor: "Sarah Chen",
    duration: "10 weeks",
    students: 890,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹7,999",
    category: "cs-it"
  },
  {
    id: 3,
    title: "Website Development",
    description: "Learn to build responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
    instructor: "Mike Davis",
    duration: "12 weeks",
    students: 2100,
    rating: 4.7,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹8,999",
    category: "cs-it"
  },
  {
    id: 4,
    title: "Web Application Development",
    description: "Build full-stack web applications using modern technologies and industry best practices.",
    instructor: "Lisa Wang",
    duration: "16 weeks",
    students: 1450,
    rating: 4.8,
    image: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹12,999",
    category: "cs-it"
  },
  {
    id: 5,
    title: "DBMS & SQL",
    description: "Master database management systems and SQL queries for efficient data handling.",
    instructor: "John Smith",
    duration: "6 weeks",
    students: 980,
    rating: 4.6,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹5,999",
    category: "cs-it"
  },
  {
    id: 6,
    title: "AI & ML",
    description: "Dive into Artificial Intelligence and Machine Learning with practical implementations.",
    instructor: "Dr. Emily Brown",
    duration: "14 weeks",
    students: 1680,
    rating: 4.9,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹15,999",
    category: "cs-it"
  },

  // Electronics Courses
  {
    id: 7,
    title: "PLC Hardware and Programming",
    description: "Learn PLC programming and hardware configuration for industrial automation systems.",
    instructor: "Robert Wilson",
    duration: "10 weeks",
    students: 650,
    rating: 4.7,
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹9,999",
    category: "electronics"
  },
  {
    id: 8,
    title: "Industrial Sensors and Instrumentation",
    description: "Understand various industrial sensors and instrumentation techniques for automation.",
    instructor: "Maria Garcia",
    duration: "8 weeks",
    students: 420,
    rating: 4.5,
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹7,999",
    category: "electronics"
  },
  {
    id: 9,
    title: "Embedded Systems",
    description: "Design and develop embedded systems for various applications and industries.",
    instructor: "David Lee",
    duration: "12 weeks",
    students: 780,
    rating: 4.8,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹11,999",
    category: "electronics"
  },

  // Machine Design Courses
  {
    id: 10,
    title: "SolidWorks",
    description: "Master 3D CAD design and simulation using SolidWorks for mechanical design projects.",
    instructor: "James Taylor",
    duration: "10 weeks",
    students: 920,
    rating: 4.7,
    image: "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹8,999",
    category: "machine-design"
  },
  {
    id: 11,
    title: "CATIA V5",
    description: "Learn advanced 3D modeling and surface design using CATIA V5 for automotive and aerospace.",
    instructor: "Anna Rodriguez",
    duration: "12 weeks",
    students: 560,
    rating: 4.8,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹10,999",
    category: "machine-design"
  },
  {
    id: 12,
    title: "AutoCAD",
    description: "Create precise 2D and 3D drawings using AutoCAD for architectural and engineering designs.",
    instructor: "Michael Johnson",
    duration: "8 weeks",
    students: 1340,
    rating: 4.6,
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹6,999",
    category: "machine-design"
  },

  // Other Courses
  {
    id: 13,
    title: "Adobe Photoshop",
    description: "Master photo editing, digital art, and graphic design using Adobe Photoshop.",
    instructor: "Creative Studio",
    duration: "6 weeks",
    students: 1890,
    rating: 4.7,
    image: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    price: "₹4,999",
    category: "other"
  },
  {
    id: 14,
    title: "Blender 3D",
    description: "Create stunning 3D models, animations, and visual effects using Blender.",
    instructor: "Tom Anderson",
    duration: "10 weeks",
    students: 1120,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹7,999",
    category: "other"
  },
  {
    id: 15,
    title: "MS Excel Advanced",
    description: "Master advanced Excel functions, macros, and data analysis techniques.",
    instructor: "Business Pro",
    duration: "4 weeks",
    students: 2340,
    rating: 4.5,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹3,999",
    category: "other"
  }
];