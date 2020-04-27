import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status props should be in the state)", () => {
        const component = create(<ProfileStatus status="it-pirates.ru" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("it-pirates.ru");
    });

    test("after <input> creator span should be displayed", () => {
        const component = create(<ProfileStatus status="it-pirates.ru" />);
        const root = component.root;
        expect(() => {
            let span = root.findByType("input");
        }).toThrow();
    });

    test("after creator span should be displayed status", () => {
        const component = create(<ProfileStatus status="it-pirates.ru" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("it-pirates.ru");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-pirates.ru" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-pirates.ru");
    });
});