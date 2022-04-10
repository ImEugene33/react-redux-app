import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test('Status from props must be in state', () => {
        const component = create(<ProfileStatus status='Status'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Status')
    })

    test('Span must be displayed', () => {
        const component = create(<ProfileStatus status='Status'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.length).not.toBeNull()
    })

    test('Input should not be displayed', () => {
        const component = create(<ProfileStatus status='Status'/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test('Span must have', () => {
        const component = create(<ProfileStatus status='Status'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('Status')
    })

    test('Input switched in edit mode', () => {
        const component = create(<ProfileStatus status='Status'/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('Status')
    })

    test('Callback was called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='Status' updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
