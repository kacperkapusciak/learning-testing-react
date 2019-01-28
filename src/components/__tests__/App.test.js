import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});