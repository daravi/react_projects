var React    = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  describe('render', () => {
    it('should render Pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls status='started' onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });
    it('should render Start button when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls status='paused' onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');
      expect($pauseButton.length).toBe(1);
    });
  });
});
