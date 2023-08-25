# el-config-table

> 一款基于 element-ui,二次封装的表格组件，支持通过 columns 配置,支持原生所有属性
>
> 项目依赖element-ui ，需要先安装再使用

## 使用



[demo](https://codepen.io/sweetwisdom/pen/GRPJLZX)



### table-prop

| filed   | 说明           | 类型  |
| ------- | -------------- | ----- |
| data    | 表格数据源     | Array |
| columns | 自定义渲染的列 | Array |



### 简单

```html
<div id="app">
  <ec-table :height="400" :data="tableData" :columns="columns" />
</div>

<script>
  const vue = {
    data() {
      return {
        columns: [
          {
            label: "序号",
            prop: "a1",
          },
          {
            label: "姓名",
            prop: "a2",
          },
          {
            label: "学科",
            children: [
              {
                label: "数学",
                prop: "a3",
              },
              {
                label: "语文",
                prop: "a4",
              },
            ],
          },
          {
            label: "合计",
            prop: "a5",
          },
        ],
        tableData: [
          {
            a1: "1",
            a2: "施寻文",
            a3: "97",
            a4: "70",
            a5: "167",
          },
          {
            a1: "2",
            a2: "王滢",
            a3: "96",
            a4: "87.5",
            a5: "183.5",
          },
          {
            a1: "3",
            a2: "吴柔",
            a3: "66",
            a4: "89",
            a5: "155",
          },
          {
            a1: "4",
            a2: "姜安琪",
            a3: "93.5",
            a4: "66.5",
            a5: "160",
          },
          {
            a1: "5",
            a2: "王眉",
            a3: "109",
            a4: "94",
            a5: "203",
          },
          {
            a1: "6",
            a2: "韩青",
            a3: "113.5",
            a4: "97",
            a5: "210.5",
          },
          {
            a1: "7",
            a2: "周滢",
            a3: "63.5",
            a4: "109",
            a5: "172.5",
          },
          {
            a1: "8",
            a2: "陶粤",
            a3: "89",
            a4: "67",
            a5: "156",
          },
          {
            a1: "9",
            a2: "卫成龙",
            a3: "117",
            a4: "71",
            a5: "188",
          },
          {
            a1: "10",
            a2: "沈紫霜",
            a3: "88.5",
            a4: "61",
            a5: "149.5",
          },
          {
            a1: "11",
            a2: "钱太群",
            a3: "111.5",
            a4: "114",
            a5: "225.5",
          },
        ],
      };
    },
    components: {},
    computed: {},
    props: {},
    watch: {},
    mounted() {},
    created() {},

    methods: {},
  };
  new Vue(vue).$mount("#app");
</script>
```

### 自定义渲染

需要在 `column`  配置 `slots`属性，并在下方实现

```html


  <body>
    <div id="app">

      <ec-table :height="400" :data="tableData" :columns="columns">
        <template v-slot:id_slot="scope">
          <span style="color: red">{{ scope.row.a1 }}</span>
        </template>
      </ec-table>
    </div>
  </body>

  <script >
    const vue = {
      data() {
        return {
          columns: [
            {
              label: '序号',
              prop: 'a1',
              slots: 'id_slot',
            },
            {
              label: '姓名',
              prop: 'a2',
            },
            {
              label: '学科',
              children: [
                {
                  label: '数学',
                  prop: 'a3',
                },
                {
                  label: '语文',
                  prop: 'a4',
                },
              ],
            },
            {
              label: '合计',
              prop: 'a5',
            },
          ],
          tableData: [
            {
              a1: '1',
              a2: '施寻文',
              a3: '97',
              a4: '70',
              a5: '167',
            },
            {
              a1: '2',
              a2: '王滢',
              a3: '96',
              a4: '87.5',
              a5: '183.5',
            },
            {
              a1: '3',
              a2: '吴柔',
              a3: '66',
              a4: '89',
              a5: '155',
            },
            {
              a1: '4',
              a2: '姜安琪',
              a3: '93.5',
              a4: '66.5',
              a5: '160',
            },
            {
              a1: '5',
              a2: '王眉',
              a3: '109',
              a4: '94',
              a5: '203',
            },
            {
              a1: '6',
              a2: '韩青',
              a3: '113.5',
              a4: '97',
              a5: '210.5',
            },
            {
              a1: '7',
              a2: '周滢',
              a3: '63.5',
              a4: '109',
              a5: '172.5',
            },
            {
              a1: '8',
              a2: '陶粤',
              a3: '89',
              a4: '67',
              a5: '156',
            },
            {
              a1: '9',
              a2: '卫成龙',
              a3: '117',
              a4: '71',
              a5: '188',
            },
            {
              a1: '10',
              a2: '沈紫霜',
              a3: '88.5',
              a4: '61',
              a5: '149.5',
            },
            {
              a1: '11',
              a2: '钱太群',
              a3: '111.5',
              a4: '114',
              a5: '225.5',
            },
          ],
        };
      },
      components: {},
      computed: {},
      props: {},
      watch: {},
      mounted() {},
      created() {},

      methods: {},
    };
    new Vue(vue).$mount('#app');
  </script>
</html>

```
