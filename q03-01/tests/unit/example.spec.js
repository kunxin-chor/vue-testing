import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('should increase text size', () => {
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    const btn = wrapper.find("#btn");
    await btn.trigger('click');
    const msg = wrapper.find('#msg');
    expect(msg.style.fontSize).toBe("36px")
  })
})
