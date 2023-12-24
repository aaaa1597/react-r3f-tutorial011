# react-r3f-tutorial011
React+TypeScriptなWebアプリで、R3Fのtutorial11。(パラメータ設定ができるやつ。Leva)

![](https://storage.googleapis.com/zenn-user-upload/ab16a5d49370-20231224.png)

# まとめ
## 1.levaをインストール
```shell
$ npm install --save-dev leva
```

## 2.levaをimport
```ts
import { useControls } from 'leva'
```

## 3.levaを定義
optionsを定義する -> useControls()の引数に渡す。
```ts
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: 'lime' },
    }
  }, [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('Polyhedron B', options)
```

## 4.levaを呼び出し
pA.xの形で、値をElementに設定する。
