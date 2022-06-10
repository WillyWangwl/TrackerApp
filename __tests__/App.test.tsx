import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from '../src/App';
import AppStack from '../src/navigator/AppStack';
import { RecoilRoot } from 'recoil';
import { Text } from 'react-native';

// const mockAppStack = <Text>AppStack Content</Text>
// jest.mock('../src/navigator/AppStack',()=> ({
//     AppStack: ()=> mockAppStack,
// }))

// describe("App.tsx", ()=> {
//     test("should render the RecoilRoot and  AppStack correctly", async ()=>{
//         const { container, queryByText } = render(<App />)
//         expect(container.findByType(RecoilRoot)).toBeTruthy();
//         expect(container.findByType(AppStack)).toBeTruthy();
//     })

//     // test("text1 ", ()=> {
//     // expect( 2+2).toBe(4)
//     // })
// })

    test("should render the RecoilRoot and  AppStack correctly", ()=>{
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    })