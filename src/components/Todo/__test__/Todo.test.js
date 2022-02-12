import { fireEvent, render, screen } from '@testing-library/react';
import Todo from './../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}
const addTask = (tasks) => {
    tasks.forEach(task => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}
describe('Todo', () => {
    it('should render same text passed into title prop', () => {
        render(<MockTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText(/Go Shopping/i);
        expect(divElement).toBeInTheDocument();
    });

    it('should render multiple items', () => {
        render(<MockTodo />);
        addTask(["Go Shopping","Pet my Cat"]);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(2);
    });

    it('task should not have completed class when initally rendered', () => {
        render(<MockTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText(/Go Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should have completed class when initally clicked', () => {
        render(<MockTodo />);
        addTask(["Go Shopping"]);
        const divElement = screen.getByText(/Go Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
})
