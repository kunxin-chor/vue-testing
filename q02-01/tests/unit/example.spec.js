import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q01-04', () => {
  it('display should not display apples at start',async () => {
    const wrapper = shallowMount(App, {})    
    const span = wrapper.find('#apple-display');
    expect(span.element).toBeUndefined();

  })

  it('display display apples when button is clicked',async () => {
     const wrapper = shallowMount(App, {});
     await wrapper.find('#apple-btn').trigger('click');
     const span = wrapper.find('#apple-display');
     expect(span.text()).toMatch('Apple');
  })
  
})
