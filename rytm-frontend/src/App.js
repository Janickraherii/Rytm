import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Timer from './Timer';
import CurrentTime from './CurrentTime';
import Menu from './Menu';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Task Manager</h1>
                <Menu />
                <AddTask />
                <TaskList />
                <Timer />
                <CurrentTime /> {/* Intègre le composant ici */}
            </header>
        </div>
    );
}

export default App;
