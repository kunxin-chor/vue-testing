import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('should change color', async () => {
    const wrapper = shallowMount(App)
    const buttons = wrapper.findAll("button");
    await buttons[0].trigger('click');
    const div = wrapper.find('div');
    expect(div.element.style.color).toBe("red")
  })
})

