export interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: string
  level: string
  lessons: Lesson[]
  completed: boolean
  progress: number
  image: string
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first responsive website from scratch.",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    completed: false,
    progress: 0,
    image: "/web-development-coding-screen.png",
    lessons: [
      {
        id: "1-1",
        title: "Getting Started with HTML",
        duration: "45 min",
        completed: false,
      },
      {
        id: "1-2",
        title: "CSS Fundamentals",
        duration: "60 min",
        completed: false,
      },
      {
        id: "1-3",
        title: "JavaScript Basics",
        duration: "75 min",
        completed: false,
      },
      {
        id: "1-4",
        title: "Responsive Design Principles",
        duration: "50 min",
        completed: false,
      },
      {
        id: "1-5",
        title: "Building Your First Website",
        duration: "90 min",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    title: "Advanced React Development",
    description:
      "Master React hooks, context API, and state management. Learn to build scalable applications with modern React patterns.",
    instructor: "Michael Chen",
    duration: "10 weeks",
    level: "Advanced",
    completed: false,
    progress: 0,
    image: "/react-javascript-code-editor.jpg",
    lessons: [
      {
        id: "2-1",
        title: "React Hooks Deep Dive",
        duration: "80 min",
        completed: false,
      },
      {
        id: "2-2",
        title: "Context API and State Management",
        duration: "70 min",
        completed: false,
      },
      {
        id: "2-3",
        title: "Performance Optimization",
        duration: "65 min",
        completed: false,
      },
      {
        id: "2-4",
        title: "Testing React Applications",
        duration: "75 min",
        completed: false,
      },
      {
        id: "2-5",
        title: "Advanced Patterns and Best Practices",
        duration: "85 min",
        completed: false,
      },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description:
      "Discover the principles of user interface and user experience design. Create beautiful, intuitive designs that users love.",
    instructor: "Emily Rodriguez",
    duration: "6 weeks",
    level: "Intermediate",
    completed: false,
    progress: 0,
    image: "/ui-ux-design-wireframe-mockup.jpg",
    lessons: [
      {
        id: "3-1",
        title: "Design Thinking Process",
        duration: "55 min",
        completed: false,
      },
      {
        id: "3-2",
        title: "Color Theory and Typography",
        duration: "60 min",
        completed: false,
      },
      {
        id: "3-3",
        title: "Wireframing and Prototyping",
        duration: "70 min",
        completed: false,
      },
      {
        id: "3-4",
        title: "User Research Methods",
        duration: "50 min",
        completed: false,
      },
      {
        id: "3-5",
        title: "Usability Testing",
        duration: "65 min",
        completed: false,
      },
    ],
  },
  {
    id: "4",
    title: "Python for Data Science",
    description:
      "Learn Python programming and data analysis techniques. Work with pandas, NumPy, and visualization libraries.",
    instructor: "David Kumar",
    duration: "12 weeks",
    level: "Intermediate",
    completed: false,
    progress: 0,
    image: "/python-data-science-charts-graphs.jpg",
    lessons: [
      {
        id: "4-1",
        title: "Python Basics for Data Science",
        duration: "60 min",
        completed: false,
      },
      {
        id: "4-2",
        title: "Working with Pandas",
        duration: "75 min",
        completed: false,
      },
      {
        id: "4-3",
        title: "Data Visualization",
        duration: "70 min",
        completed: false,
      },
      {
        id: "4-4",
        title: "Statistical Analysis",
        duration: "80 min",
        completed: false,
      },
      {
        id: "4-5",
        title: "Machine Learning Introduction",
        duration: "90 min",
        completed: false,
      },
    ],
  },
]
