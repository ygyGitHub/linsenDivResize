# linsendivresize

> @Author ygy
>
> 参考：https://blog.csdn.net/melody_zcb/article/details/84238928
>
> A typescript project
>
> 监听div等块级元素宽高发生变化，兼容ie9以上浏览器

## Setup

``` bash
 npm i linsendivresize
```

## use

```typescript
import {linsenDivResize} from 'linsendivresize'
let resizeDiv = document.getElementById(id); // 被监听元素
let EleResize = linsenDivResize()// 注册
EleResize.on(resizeDiv, function (e) {//回调，当宽高确实发生变化了会被触发
    console.log(e)//被监听元素的所有属性，宽高请取innerWidth和innerHeight
})

```

