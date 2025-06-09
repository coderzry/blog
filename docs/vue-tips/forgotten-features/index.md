# 被遗忘的功能

## 1、传递大量 props 的更简单方法

无需将大量的 props 单独传递给组件：

```vue
<template>
  <User
  :name="user.name"
  :profile="user.profile"
  :twitter="user.twitter"
  />
</template>
```

可以获取整个对象并将其所有属性自动绑定到组件作为 props：

```js
<template>
  <User v-bind="user"/>
</template>

export default {
  setup() {
    return {
      user: {
        name: 'Anakin',
        profile: 'ani-profile.jpg',
        twitter: '@TatooineJedi',
      },
    };
  },
}
```

这也适用于`v-on`如果你有很多事件处理程序:

```js
<template>
<User v-on="userEventHandlers"/>
</template>

export default {
  setup() {
    return {
      userEventHandlers: {
        updateName(newName) {
          // ...
        },
        deleteUser() {
          // ...
        },
        addFriend(friend) {
          // ...
        }
      },
    };
  },
};
```

## 2、监听数组和对象
使用观察器最棘手的部分是有时它似乎无法正确触发。通常，这是因为你试图观察一个数组或对象，但没有设置`deep: true`
```js
export default {
  name: 'ColourChange',
  props: {
    colours: {
    type: Array,
    required: true,
    },
  },
  watch: {
    colours: {
      deep: true,
      handler() {
        console.log('The list of colours has changed!');
      }
    }
  }
}
```

使用 Vue 3 中的 `reactivity API`  如下所示：

```js
watch(
  colours,
  () => {
    console.log('The list of colours has changed!');
  },
  {
    deep: true,
  }
);
```

## 3、将 prop 限制为一组类型

使用 prop 定义中的 validator 选项，您可以限制 prop 的值范围为特定的集合：

```js
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
    },
    style: {
      type: String,
      validator: s => ['square', 'rounded'].includes(s)
    }
  }
};
```
这个验证函数接收一个 prop，并返回 true 或 false — 表示 prop 是否有效。


按钮类型或警告类型（信息、成功、危险、警告）是最常见的用途之一。


## 4、如何在组件中监听任何内容

在组件中任何具有响应性的内容都可以被监听：

```js
export default {
  computed: {
    someComputedProperty() {
    // Update the computed prop
  },
  },
  watch: {
    someComputedProperty() {
    // Do something when the computed prop is updated
    }
  }
};
```

可以监听：
- 计算属性
- props
- 嵌套值

任何值都可以被监视，只要你使用的是组合 API，并且它是 `ref` 或 `reactive` 对象。


## 5、全局组件

当全局注册一个组件时，可以在任何模板中使用它，而无需再次导入它：

```js
// Vue 3
import { createApp } from 'vue';
import GlobalComponent from './GlobalComponent.vue';
const app = createApp({})
app.component('GlobalComponent', GlobalComponent);
```

在 Vue 2 中，你可以像这样注册全局组件：
```js
// Vue 2
import Vue from 'vue';
import GlobalComponent from './GlobalComponent.vue';
Vue.component('GlobalComponent', GlobalComponent);
```

现在你可以在模板中直接使用 GlobalComponent，无需额外操作！当然，全局注册的组件和全局变量一样，有各自的优缺点。所以请谨慎使用。

## 6、使用引号来监听嵌套值

你可能不知道，只需使用引号，就可以直接查看嵌套值：
```js
watch: {
  '$route.query.id'() {
    // ...
  }
}
```
适合处理嵌套很深的对象。

## 7、Getting Meta with Nuxt 3
With Nuxt 3 we get some simple ways to update our meta tags, `<head>` and `<body>` .
You can do it from within the template with the meta components:

```js
<template>
  <Head>
    <Title>{{ data }}</Title>
  </Head>
  <Body class="body-class"></Body>
  <!-- ...rest of the component here -->
</template>
```
Or using the `useMeta` composable that is globally available:
```vue
<script setup>
  const data = await useFetch("/api/stuff");
  useMeta({
    title: data,
    bodyAttrs: {
      class: "body-class",
    },
  });
</script>
```

## 8、h 和 Render 函数

使用`render`函数而不是模板时，会经常使用 `h` 函数：

```vue
<script setup>
import { h } from 'vue';
const render = () => h('div', {}, 'Hello Wurld');
</script>
```

它会创建一个 VNode（虚拟节点），这是一个 Vue 内部用于跟踪更新和应渲染内容的对象。
第一个参数可以是 HTML 元素名称或者一个组件（如果需要，组件可以是异步的）：

```vue
<script setup>
import { h } from 'vue';
import MyComponent from './MyComponent.vue';
const render = () => h(MyComponent, {}, []);
</script>
```

第二个参数是`props`、`attributes`和事件处理器的列表：
```vue
<script setup>
import { h } from 'vue';
import MyComponent from './MyComponent.vue';
const render = () => h(MyComponent, {
  class: 'text-blue-400',
  title: 'This component is the greatest',
  onClick() {
    console.log('Clicked!');
  },
}, []);
</script>
```

第三个参数可以是文本节点的字符串、子 VNodes 的数组，或者用于定义插槽的对象：
```vue
<script setup>
import { h } from 'vue';
import MyComponent from './MyComponent.vue';
const render = () => h(MyComponent, {}, [
  'Simple text node',
  h('span', {}, 'Text inside of a <span> element'),
]);
</script>
```

这些渲染函数实际上是 Vue 编译单文件组件并在浏览器中运行时所发生的事情。
但是，通过自己编写渲染函数，你就不再受模板中能做的事情的限制了。
你手中拥有了完整的 JavaScript 功能！
这只是渲染函数和 h 能做到的皮毛。更多内容请参阅[官方文档](https://cn.vuejs.org/guide/extras/render-function.html)。