import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

// Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

// Tasks data for each roadmap step
const roadmapTasks: Record<number, Task[]> = {

    1: [
        { id: 1, title: 'Identify pain points', description: 'Document key problems that need solving', completed: false },
        { id: 2, title: 'Conduct user interviews', description: 'Gather insights from potential users', completed: false },
        { id: 3, title: 'Research market needs', description: 'Analyze existing solutions and market gaps', completed: false },
        { id: 4, title: 'Define problem statement', description: 'Clearly articulate the problem to be solved', completed: false },
    ],
    2: [
        { id: 1, title: 'Brainstorming session', description: 'Generate ideas without criticism', completed: false },
        { id: 2, title: 'Concept sketching', description: 'Create visual representations of ideas', completed: false },
        { id: 3, title: 'Concept validation', description: 'Initial feedback from stakeholders', completed: false },
        { id: 4, title: 'Define value proposition', description: 'Articulate the unique value of your solution', completed: false },
    ],
    3: [
        { id: 1, title: 'Technical feasibility assessment', description: 'Evaluate if the solution can be built', completed: false },
        { id: 2, title: 'Resource requirement analysis', description: 'Identify necessary skills and resources', completed: false },
        { id: 3, title: 'Market feasibility study', description: 'Analyze if there is market demand', completed: false },
        { id: 4, title: 'Cost-benefit analysis', description: 'Calculate potential ROI', completed: false },
    ],
    4: [
        { id: 1, title: 'Create low-fidelity prototype', description: 'Build a basic version to test core functionality', completed: false },
        { id: 2, title: 'User testing protocol', description: 'Develop a plan to test with users', completed: false },
        { id: 3, title: 'Conduct prototype testing', description: 'Get feedback from users on the prototype', completed: false },
        { id: 4, title: 'Iterate based on feedback', description: 'Refine the prototype based on user input', completed: false },
    ],
    5: [
        { id: 1, title: 'Revenue Model Definition', description: 'Identify potential revenue streams and pricing strategies.', completed: false },
        { id: 2, title: 'Cost Structure Analysis', description: 'Break down operational and production costs to assess profitability.', completed: false },
        { id: 3, title: 'Value Proposition Mapping', description: 'Clearly define the unique value the solution offers to customers.', completed: false },
        { id: 4, title: 'Financial Forecasting', description: 'Create financial projections to estimate revenue, expenses, and break-even points.', completed: false },
    ],
    6: [
        { id: 1, title: 'Development planning', description: 'Create detailed development roadmap', completed: false },
        { id: 2, title: 'Resource allocation', description: 'Assign team members to specific tasks', completed: false },
        { id: 3, title: 'Implementation execution', description: 'Build the actual solution', completed: false },
        { id: 4, title: 'Deployment strategy', description: 'Plan for release to users', completed: false },
    ],
    7: [
        { id: 1, title: 'Define success metrics', description: 'Establish KPIs to measure performance', completed: false },
        { id: 2, title: 'Implement tracking systems', description: 'Set up analytics to monitor usage', completed: false },
        { id: 3, title: 'Gather user feedback', description: 'Collect ongoing feedback from users', completed: false },
        { id: 4, title: 'Plan iteration cycles', description: 'Schedule regular updates and improvements', completed: false },
    ],
};

interface RoadmapTasksProps {
    currentStep: number;
    onStepComplete: (stepId: number) => void;
    onProgressUpdate?: (stepId: number, progressPercent: number) => void;
}

const RoadmapTasks: React.FC<RoadmapTasksProps> = ({
                                                       currentStep,
                                                       onStepComplete,
                                                       onProgressUpdate
                                                   }) => {
    // State to track completed tasks
    const [tasks, setTasks] = useState<Record<number, Task[]>>(roadmapTasks);

    // Function to toggle task completion
    const toggleTask = (taskId: number) => {
        setTasks(prevTasks => {
            const updatedStepTasks = prevTasks[currentStep].map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            );

            const newTasks = {
                ...prevTasks,
                [currentStep]: updatedStepTasks
            };

            // Check if all tasks are completed
            const allCompleted = newTasks[currentStep].every(task => task.completed);

            // If all tasks are completed, notify parent component
            if (allCompleted) {
                setTimeout(() => {
                    onStepComplete(currentStep);
                }, 1000); // Delay to allow user to see the completion
            }

            return newTasks;
        });
    };

    // Get the tasks for the current step
    const currentTasks = tasks[currentStep] || [];

    // Calculate completion percentage
    const completedCount = currentTasks.filter(task => task.completed).length;
    const completionPercentage = currentTasks.length > 0
        ? Math.round((completedCount / currentTasks.length) * 100)
        : 0;

    const [lastCompletionPercentage, setLastCompletionPercentage] = useState(0);
    // Report progress to parent component when it changes
    React.useEffect(() => {
        if (completionPercentage !== lastCompletionPercentage) {
            setLastCompletionPercentage(completionPercentage);
            if (onProgressUpdate) {
                onProgressUpdate(currentStep, completionPercentage);
            }
        }
    }, [completionPercentage, currentStep, onProgressUpdate, lastCompletionPercentage]);


    return (
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Tasks for this step</h2>
                <div className="flex items-center">
                    <div className="h-2.5 w-32 bg-gray-200 rounded-full mr-2">
                        <div
                            className="h-2.5 bg-green-500 rounded-full"
                            style={{ width: `${completionPercentage}%` }}
                        ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{completionPercentage}% complete</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTasks.map(task => (
                    <div
                        key={task.id}
                        className={`task-card p-4 border rounded-lg transition-all duration-200 ${
                            task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow'
                        }`}
                    >
                        <div className="flex items-start">
                            <button
                                onClick={() => toggleTask(task.id)}
                                className="mt-1 mr-3 flex-shrink-0 focus:outline-none"
                            >
                                {task.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                    <Circle className="h-5 w-5 text-gray-300" />
                                )}
                            </button>
                            <div>
                                <h3 className={`font-medium ${task.completed ? 'text-green-700 line-through' : 'text-gray-900'}`}>
                                    {task.title}
                                </h3>
                                <p className={`text-sm mt-1 ${task.completed ? 'text-green-600' : 'text-gray-500'}`}>
                                    {task.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RoadmapTasks;