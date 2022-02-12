import { render, screen } from '@testing-library/react';
import Header from './../Header';

describe('Header', () => {
    
    describe("getByText", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.getByText(/My Header/i);
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("getByRole", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.getByRole('heading', { name: "My Header" })
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("getByTitle", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.getByTitle("Header");
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("getByTestId", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.getByTestId('header-1');
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("findByText", () => {
        it('should render same text passed into title prop', async () => {
            render(<Header title="My Header" />);
            const headingElement = await screen.findByText(/My Header/i);
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("queryByText", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.queryByText(/dogs/i);
            expect(headingElement).not.toBeInTheDocument();
        });
    })

    describe("getAllByRole", () => {
        it('should render same text passed into title prop', () => {
            render(<Header title="My Header" />);
            const headingElement = screen.getAllByRole('heading');
            expect(headingElement.length).toBe(2);
        });
    })
})
