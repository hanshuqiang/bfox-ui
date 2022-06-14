export const propsObj = {
    apiData: {
        type: Array,
        default: () => {
            return []
        }
    },
    /**
     * 数据请求API  url he data 优先使用url
     */
    apiUrl: {
        type: String,
        default: ''
    },
    /**
     * api 参数
     */
    apiParams: {
        type: Function,
        default: () => {
            return {}
        }
    },
    /**
     * 请求方式，默认get,不区分大小写
     */
    apiMethod: {
        type: String,
        default: 'get'
    },
    //自定义列
    columns: {
        type: Array,
        default: () => {
            return []
        }
    },
    /**
     * 是否启用多选
     */
    selection: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否启用自定义列
     */
    customColumn: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否分页
     */
    isPaging: {
        type: Boolean,
        default: true,
        required: true
    },
    /**
     * 头部是否吸顶
     */
    headerTopfixed: {
        type: Boolean,
        default: true
    },
    //------------------
    //以下是原生属性
    rowKey: {
        type: String || Function,
        default: 'ID'
    },
    fit: {
        type: Boolean,
        default: true
    },
    //行样式
    rowClassName: {
        type: [String, Function],
        default: ''
    },
    //合并行或列的计算方法
    spanMethod: {
        type: Function,
        default: () => { }
    },
    border: {
        type: Boolean,
        default: false
    },
    'cell-style': {
        type: [Object, Function],
        default: () => { }
    },
    defaultExpandAll: {
        type: Boolean,
        default: false
    }
}
