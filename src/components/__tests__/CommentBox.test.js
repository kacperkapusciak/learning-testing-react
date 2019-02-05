import React from "react";
import { mount, configure } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapper.update();
  });

  it("has a textarea that users can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, textarea should be emptied", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
