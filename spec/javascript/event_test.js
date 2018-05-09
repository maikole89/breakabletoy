import Event from '../../app/javascript/components/Event';

describe('Event', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Event
        name = "Boston Children's Event"
      />
    );
  });

//  new test
  it('should render the Event component', () => {
    expect(wrapper.find(Event)).toBePresent();
  });

  it('receives the correct props', () => {
    expect(wrapper.find(Event).props()).toEqual({name: "Boston Children's Event"})
  });

  it('renders an "li" tag', () => {
    expect(wrapper.find('li')).toBePresent()
  })
});
