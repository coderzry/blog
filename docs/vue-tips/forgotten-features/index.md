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

## 2、观察数组和对象
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
