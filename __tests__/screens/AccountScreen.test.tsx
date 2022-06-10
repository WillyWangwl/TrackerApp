import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import AccountScreen from '../../src/screens/AccountScreen';

describe("Test Account Screen", ()=> {

    // component should render  as expected
    it("should render with default button", async ()=> {
        const { getByText } = render(<AccountScreen />);

        await waitFor(()=> {
            expect(getByText("Sign Out")).toBeTruthy();
        });
    });
})

