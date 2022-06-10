import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import NavLink from '../../src/components/NavLink';
import renderer from 'react-test-renderer';

describe("NavLink.tsx", ()=> {

    const text = "test";
    const routeName = "SignIn";

    test("should render the RecoilRoot and  AppStack correctly", ()=>{
    const tree = renderer.create(<NavLink text={text} routeName={routeName} />).toJSON();
    expect(tree).toMatchSnapshot();
    })
})
