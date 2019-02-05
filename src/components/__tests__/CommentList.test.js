import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Root from "Root";
import CommentList from "components/CommentList";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"]
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one <li> element per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapper.render().text()).toContain("comment1");
  expect(wrapper.render().text()).toContain("comment2");
});
