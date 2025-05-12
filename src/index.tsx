import ReactDOM from 'react-dom/client';
import TaskInputForm from './components/TaskForm';
import {FC} from "react";

type Props = {
    onAddTask: (task: string) => void;
    containerId: string;
}

const TaskFormApp: FC<Props> = ({ onAddTask, containerId }) => {
    const container = document.getElementById(containerId);
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<TaskInputForm onAddTask={onAddTask} />);
    }
    return null;
};

export default TaskFormApp;