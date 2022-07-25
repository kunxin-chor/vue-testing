import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders prop', () => {
    const wrapper = shallowMount(App)  
    const div = wrapper.findAll('div').at(1);
    expect(div.text().toLowerCase()).toMatch("mary has a little lamb");
  })
})
