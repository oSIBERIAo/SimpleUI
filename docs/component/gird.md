---
title: Gird
---

# Gird

#### 使用方法

---

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

```
<s-row>
<s-col
    :spen="2"
    :xs="{ span: 12 }"
    :sm="{ span: 6 }"
    :md="{ span: 8 }"
    :lg="{ span: 10 }"
    :xl="{ span: 4 }"
    :xll="{ span: 2 }"
>col</s-col
>
<s-col
    :spen="22"
    :xs="{ span: 12, offset: 12 }"
    :sm="{ span: 18 }"
    :md="{ span: 16 }"
    :lg="{ span: 14 }"
    :xl="{ span: 20 }"
    :xll="{ span: 22 }"
>col</s-col
>
</s-row>
<s-row>
<s-col>col</s-col>
<s-col>col</s-col>
</s-row>
<s-row>
<s-col :spen="2"></s-col>
<s-col :spen="22"></s-col>
</s-row>
<s-row>
<s-col :spen="2" :offset="2"></s-col>
<s-col :spen="2"></s-col>
<s-col :spen="4"></s-col>
<s-col :spen="6"></s-col>
<s-col :spen="8"></s-col>
</s-row>
```
