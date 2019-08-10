import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'cart', ...(require('/Users/zhunny/Desktop/react-library/react-umi/src/models/cart.js').default) });
app.model({ namespace: 'user', ...(require('/Users/zhunny/Desktop/react-library/react-umi/src/models/user.js').default) });
app.model({ namespace: 'goods', ...(require('/Users/zhunny/Desktop/react-library/react-umi/src/pages/goods/models/goods.js').default) });
