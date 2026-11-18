type MockEvent = {
    id: string;
    title: string;
    date: string; // Format yyyy-mm-dd
    completed: boolean;
    description?: string;
    priority?: 'low' | 'medium' | 'high';
    category?: 'work' | 'rest' | 'learning';
}

const mockEvents: MockEvent[] = [
    { id: '1', title: 'Meeting with the team', date: '2026-09-01', completed: true, category: 'work' },
    { id: '2', title: 'Travel to Paris', date: '2026-09-10', completed: false, category: 'rest' },
    { id: '3', title: 'Web development course', date: '2026-09-15', completed: false, category: 'learning' },
    { id: '4', title: 'Client presentation', date: '2026-09-20', completed: false, category: 'work' },
    { id: '5', title: 'Family dinner', date: '2026-09-25', completed: false, category: 'rest' },
    { id: '6', title: 'Project deadline', date: '2026-09-30', completed: false, category: 'work' },
    { id: '7', title: 'Vacation in Hawaii', date: '2026-10-01', completed: false, category: 'rest' },
    { id: '8', title: 'Learning JavaScript', date: '2026-10-05', completed: false, category: 'learning' },
    { id: '9', title: 'Workshop on project management', date: '2026-10-10', completed: false, category: 'work' },
    { id: '10', title: 'Family gathering', date: '2026-10-15', completed: false, category: 'rest', priority: 'high', description: 'Important family gathering' },
    { id: '11', title: 'Home renovation', date: '2026-10-20', completed: false, category: 'rest', priority: 'medium', description: 'Kitchen renovation' },
    { id: '12', title: 'Learning TypeScript', date: '2026-10-25', completed: false, category: 'learning', priority: 'low', description: 'Basic TypeScript concepts' },
    { id: '13', title: 'Client call', date: '2026-10-30', completed: false, category: 'work' },
    { id: '14', title: 'Trip to the mountains', date: '2026-11-01', completed: false, category: 'rest', priority: 'high', description: 'Weekend hiking trip' },
    { id: '15', title: 'Learning React', date: '2026-11-05', completed: false, category: 'learning', priority: 'medium', description: 'React basics' },
    { id: '16', title: 'Workshop on software architecture', date: '2026-11-10', completed: false, category: 'work' },
    { id: '17', title: 'Family lunch', date: '2026-11-15', completed: false, category: 'rest', priority: 'low', description: 'Weekly family lunch' },
    { id: '18', title: 'Home improvement project', date: '2026-11-20', completed: false, category: 'rest', priority: 'high', description: 'Fixing the leaky faucet' },
    { id: '19', title: 'Learning Angular', date: '2026-11-25', completed: false, category: 'learning', priority: 'low', description: 'Angular for beginners' },
    { id: '20', title: 'Client meeting', date: '2026-11-30', completed: false, category: 'work' },
    { id: '21', title: 'Trip to the beach', date: '2026-12-01', completed: false, category: 'rest', priority: 'medium', description: 'Christmas Eve trip' },
    { id: '22', title: 'Learning Vue.js', date: '2026-12-05', completed: false, category: 'learning', priority: 'low', description: 'Vue.js essentials' },
    { id: '23', title: 'Workshop on data structures', date: '2026-12-10', completed: false, category: 'work' },
    { id: '24', title: 'Family celebration', date: '2026-12-15', completed: false, category: 'rest', priority: 'high', description: 'New Year\'s Eve celebration' },
    { id: '25', title: 'Home project', date: '2026-12-20', completed: false, category: 'rest', priority: 'medium', description: 'Christmas tree decoration' },
    { id: '26', title: 'Learning Node.js', date: '2026-12-25', completed: false, category: 'learning', priority: 'high', description: 'Node.js for backend development' },
    { id: '27', title: 'Client call', date: '2027-01-01', completed: false, category: 'work' },
    { id: '28', title: 'Trip to the countryside', date: '2027-01-05', completed: false, category: 'rest', priority: 'low', description: 'Winter vacation' },
    { id: '29', title: 'Learning Express.js', date: '2027-01-10', completed: false, category: 'learning', priority: 'medium', description: 'Express.js for web development' },
    { id: '30', title: 'Workshop on cloud computing', date: '2027-01-15', completed: false, category: 'work' },
];