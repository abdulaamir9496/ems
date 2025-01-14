//Each employee has 3-10 tasks with realistic properties and 
//varied states for active, newTask, completed, and failed. 

const employees = {
    "employees": [
        {
            "id": 1,
            "email": "employee1@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Submit Project Report",
                    "description": "Complete and submit the Q1 project report.",
                    "date": "2025-01-15",
                    "category": "Reports",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Team Meeting Preparation",
                    "description": "Prepare slides for the upcoming team meeting.",
                    "date": "2025-01-16",
                    "category": "Meetings",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Code Review",
                    "description": "Review the new feature implementation.",
                    "date": "2025-01-14",
                    "category": "Development",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                }
            ]
        },
        {
            "id": 2,
            "email": "employee2@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Update Client Records",
                    "description": "Update client contact details in CRM.",
                    "date": "2025-01-15",
                    "category": "Data Entry",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Resolve Customer Queries",
                    "description": "Follow up with customers regarding pending issues.",
                    "date": "2025-01-16",
                    "category": "Support",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Prepare Budget Plan",
                    "description": "Draft the budget plan for next quarter.",
                    "date": "2025-01-20",
                    "category": "Finance",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 3,
            "email": "employee3@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Inventory Audit",
                    "description": "Conduct an audit of the warehouse inventory.",
                    "date": "2025-01-15",
                    "category": "Operations",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": true
                },
                {
                    "title": "Vendor Negotiations",
                    "description": "Negotiate better pricing with key vendors.",
                    "date": "2025-01-17",
                    "category": "Procurement",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Organize Workshop",
                    "description": "Plan and organize a workshop on product training.",
                    "date": "2025-01-22",
                    "category": "Training",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 4,
            "email": "employee4@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Social Media Campaign",
                    "description": "Launch a new social media campaign for the product.",
                    "date": "2025-01-18",
                    "category": "Marketing",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Customer Survey Analysis",
                    "description": "Analyze the results of the recent customer survey.",
                    "date": "2025-01-16",
                    "category": "Analytics",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Draft Newsletter",
                    "description": "Create the draft for the monthly newsletter.",
                    "date": "2025-01-15",
                    "category": "Communication",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                }
            ]
        },
        {
            "id": 5,
            "email": "employee5@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Test Software Patch",
                    "description": "Test the new patch before deployment.",
                    "date": "2025-01-14",
                    "category": "Testing",
                    "active": false,
                    "newTask": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "title": "Update Documentation",
                    "description": "Update user manuals for the latest version.",
                    "date": "2025-01-19",
                    "category": "Documentation",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Bug Fixes",
                    "description": "Fix critical bugs reported by the QA team.",
                    "date": "2025-01-20",
                    "category": "Development",
                    "active": true,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        }
    ]
};

const admin = {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
};


// Set data in localStorage
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    console.log("Data successfully stored in localStorage.");
};

// Get data from localStorage
export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));

    if (!employeesData || !adminData) {
        console.error("Data not found in localStorage. Did you run setLocalStorage()?");
        return;
    }

    console.log("Employees Data:", employeesData);
    console.log("Admin Data:", adminData);
};

// Run the functions in the correct order
setLocalStorage();
getLocalStorage();

