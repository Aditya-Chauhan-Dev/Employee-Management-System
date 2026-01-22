const employee = [
  {
    "employeeId": "EMP001",
    "name": "Aditya",
    "email": "aditya@company.com",
    "password": "123",
    "totalTask": 3,
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Build Login Page",
        "taskDescription": "Create login UI using React and Tailwind",
        "taskDate": "2026-01-10",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve responsive issue in navbar",
        "taskDate": "2026-01-12",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Optimize Images",
        "taskDescription": "Compress and optimize website images",
        "taskDate": "2026-01-15",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "employeeId": "EMP002",
    "name": "Rahul",
    "email": "rahul@company.com",
    "password": "123",
    "totalTask": 4,
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "API Integration",
        "taskDescription": "Integrate user API with frontend",
        "taskDate": "2026-01-11",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Create Dashboard",
        "taskDescription": "Design admin dashboard layout",
        "taskDate": "2026-01-14",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add unit tests for components",
        "taskDate": "2026-01-16",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Update README",
        "taskDescription": "Improve project documentation",
        "taskDate": "2026-01-18",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "employeeId": "EMP003",
    "name": "Neha",
    "email": "neha@company.com",
    "password": "123",
    "totalTask": 3,
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create landing page wireframe",
        "taskDate": "2026-01-09",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Color Palette Selection",
        "taskDescription": "Choose brand colors",
        "taskDate": "2026-01-11",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Feedback Review",
        "taskDescription": "Analyze feedback from client",
        "taskDate": "2026-01-13",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "employeeId": "EMP004",
    "name": "Suman",
    "email": "suman@company.com",
    "password": "123",
    "totalTask": 4,
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Database Schema Design",
        "taskDescription": "Design MongoDB schema",
        "taskDate": "2026-01-08",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Auth Middleware",
        "taskDescription": "Create JWT authentication middleware",
        "taskDate": "2026-01-12",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Server Deployment",
        "taskDescription": "Deploy server on cloud",
        "taskDate": "2026-01-17",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Error Logging",
        "taskDescription": "Implement error logging system",
        "taskDate": "2026-01-19",
        "category": "Monitoring",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "employeeId": "EMP005",
    "name": "Priya",
    "email": "priya@company.com",
    "password": "123",
    "totalTask": 3,
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Content Writing",
        "taskDescription": "Write homepage content",
        "taskDate": "2026-01-07",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Optimize content for SEO",
        "taskDate": "2026-01-10",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Blog Publishing",
        "taskDescription": "Publish weekly blog",
        "taskDate": "2026-01-14",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];





const admin=[{
    "id":1,
    "name":"Aditya",
    "email":"admin@company.com",
    "password":"123"
}]

export const setlocalstorage = () => {
  const employees = localStorage.getItem("employees")
  const adminData = localStorage.getItem("admin")

  if (!employees) {
    localStorage.setItem("employees", JSON.stringify(employee))
  }

  if (!adminData) {
    localStorage.setItem("admin", JSON.stringify(admin))
  }
}


export const getlocalstorage=()=>{
    const employee=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    return {employee,admin}
    
}