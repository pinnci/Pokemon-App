import React from "react";
import { shallow } from "enzyme";

//Component
import Navigation from "../Components/Navigation";

const wrapper = shallow(<Navigation />);

describe("Navigation", () => {
  it("renders without crashing", () => {
    shallow(<Navigation />);
  });

  it("redirects to home page on click", () => {
    const img = wrapper.find("img");
    img.simulate("click");
    const location = window.location.pathname;

    expect(location).toBe("/");
  });
});
