echo "Creating question"
vue create "$@"
cp templates/App.vue "$@"/src/components/App.vue
cp templates/jest.config.js "$@"/
sleep 2s
cp templates/vue.config.js "$@"/