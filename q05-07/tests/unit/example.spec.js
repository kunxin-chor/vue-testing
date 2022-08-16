import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('can change the color', async () => {
    const wrapper = mount(App, {});
    const inputs = wrapper.findAll('input');
    await inputs.at(0).setChecked();
    await inputs.at(1).setChecked();
    expect(wrapper.find('#result').text()).toMatch('2');
  })
})
