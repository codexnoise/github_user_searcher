// Generated by CodiumAI
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import UserNotFound from './UserNotFound';


describe('UserNotFound_function', () => {

    // Tests that the component renders without errors
    it('test_render_component', () => {
        render(<UserNotFound />);
    });
 
    //Tests that the 404 message is rendered
    it('test_render_404_message', () => {
        const { getByText } = render(<UserNotFound />);
        expect(getByText('404')).toBeInTheDocument();
    });

    // Tests that the developer not found message is rendered
    it('test_render_developer_not_found_message', () => {
        const { getByText } = render(<UserNotFound />);
        expect(getByText('developer not found')).toBeInTheDocument();
    });

    // Tests that the Typography components are rendered
    it('test_Typography_components_rendered', () => {
        const { getAllByRole } = render(<UserNotFound />);
        expect(getAllByRole('heading')).toHaveLength(2);
    });

    // Tests that the Stack component has the correct props
    it('test_Stack_component_props', () => {
        const { getByRole } = render(<UserNotFound />);
        expect(getByRole('presentation')).toHaveStyle({
            margin: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        });
    });
});
