# eslint-config-zqlian

## Install

```bash
npm install eslint-config-zqlian
```

## Usage
默认你已经懂得基本的eslint配置

项目在升级eslint 6.x的时候 发现standard 和 elemefe都无法满足现有要求，综合取舍得到新的配置
主要处理standard 无法识别template部分符号报错，eslint内es6配置与新配置冲突


添加配置到 `.eslintrc` 文件:

```
{
  "extends": "zqlian"
}
```

## License

MIT. Copyright (c) [wuyun].
