import React from "react";
import { shallow } from "enzyme";
import { HeaderContainer } from "./header";

describe("HeaderContainer", () => {
  it("should render my component", () => {
    const wrapper = shallow(<HeaderContainer isUser={false} />);
  });

  it("should render initial layout", () => {
    const component = shallow(<HeaderContainer isUser={false} />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
