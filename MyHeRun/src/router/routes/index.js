const routes = [
        {
            path: '/',
            redirect: {name: '首页'},
            isHidden: true
        },
        {
            path: '/main',
            component: () => import('../../views/main/MyMain.vue'),
            name: '首页',
            iconName: 'iconfont hr-home',
        },
        {
            path: '/sale',
            component: () => import('../../views/sale/MySale.vue'),
            name: '销售',
            iconName: 'iconfont hr-sale',
            children: [
                {
                    path: '/sale/SaleOrder',
                    name: '销售订单',
                    component: () => import('../../views/sale/components/SaleOrder.vue')
                }, {
                    path: '/sale/SaleOut',
                    name: '销售出库',
                    component: () => import('../../views/sale/components/SaleOut.vue')
                }, {
                    path: '/sale/SaleReturn',
                    name: '销售退货',
                    component: () => import('../../views/sale/components/SaleReturn.vue')
                }, {
                    path: '/sale/SaleOutAndReturn',
                    name: '销售出库退货汇总',
                    component: () => import('../../views/sale/components/SaleOutAndReturn.vue')
                },
            ],
        },
        {
            path: '/directSale',
            component: () => import('../../views/directSale/DirectSale'),
            name: '门店直销',
            iconName: 'iconfont hr-directsale',
            children: [
                {
                    path: '/directSale/DirectSaleOrder',
                    name: '直销订单',
                    component: () => import('../../views/directSale/components/DirectSaleOrder.vue')
                }, {
                    path: '/directSale/DirectSaleOut',
                    name: '直销出库单',
                    component: () => import('../../views/directSale/components/DirectSaleOut.vue')
                }, {
                    path: '/directSale/DirectSaleReturn',
                    name: '直销退货单',
                    component: () => import('../../views/directSale/components/DirectSaleReturn.vue')
                }, {
                    path: '/directSale/DirectSaleOutAndReturn',
                    name: '直销出库退货汇总',
                    component: () => import('../../views/directSale/components/DirectSaleOutAndReturn.vue')
                },
            ],
        }, {
            path: '/purchase',
            component: () => import('../../views/purchase/MyPurchase.vue'),
            name: '采购',
            iconName: 'iconfont hr-purchase',
            children: [
                {
                    path: '/purchase/PurchaseOrder',
                    name: '采购订单',
                    component: () => import('../../views/purchase/components/PurchaseOrder.vue')
                }, {
                    path: '/purchase/PurchaseIn',
                    name: '采购入库',
                    component: () => import('../../views/purchase/components/PurchaseIn.vue')
                }, {
                    path: '/purchase/PurchaseReturn',
                    name: '采购退货',
                    component: () => import('../../views/purchase/components/PurchaseReturn.vue')
                }, {
                    path: '/purchase/PurchaseInAndReturn',
                    name: '采购进退货',
                    component: () => import('../../views/purchase/components/PurchaseInAndReturn.vue')
                },
            ],
        }, {
            path: '/stock',
            component: () => import('../../views/stock/MyStock.vue'),
            name: '库存',
            iconName: 'iconfont hr-stock',
            children: [
                {
                    path: '/stock/PurchaseOrder',
                    name: '库存查询',
                    component: () => import('../../views/stock/components/StockList.vue')
                }, {
                    path: '/stock/PurchaseIn',
                    name: '库存预警',
                    component: () => import('../../views/stock/components/StockWarning.vue')
                }, {
                    path: '/stock/PurchaseReturn',
                    name: '过期预警',
                    component: () => import('../../views/stock/components/ExpireWarning.vue')
                }, {
                    path: '/stock/PurchaseInAndReturn',
                    name: '仓库收发汇总',
                    component: () => import('../../views/stock/components/SendAndRecvSumReport.vue')
                },
            ],
        }, {
            path: '/production',
            component: () => import('../../views/production/MyProduction.vue'),
            name: '生产',
            iconName: 'iconfont hr-production',
            children: [
                {
                    path:'/production/Plan',
                    name:'生产计划',
                    component:()=>import('../../views/production/components/MyPlan.vue')
                }, {
                    path:'/production/WorkOrder',
                    name:'加工单',
                    component:()=>import('../../views/production/components/WorkOrder.vue')
                }, {
                    path:'/production/AcceptanceCheck',
                    name:'验收单',
                    component:()=>import('../../views/production/components/AcceptanceCheck.vue')
                }, {
                    path:'/production/CostAllocation',
                    name:'成本分摊',
                    component:()=>import('../../views/production/components/CostAllocation.vue')
                },
            ]
        },
        {
            path: '/finance',
            component: () => import('../../views/finance/MyFinance.vue'),
            name: '财务',
            iconName: 'iconfont hr-finance',
            children: [
                {
                    path:'/finance/ReceivableAndPayable',
                    name:'应收应付',
                    component:()=>import('../../views/finance/components/ReceivableAndPayable.vue')
                },{
                    path:'/finance/CollectionBill',
                    name:'收款单',
                    component:()=>import('../../views/finance/components/CollectionBill.vue')
                },{
                    path:'/finance/PaymentBill',
                    name:'付款单',
                    component:()=>import('../../views/finance/components/PaymentBill.vue')
                },
            ]
        },
        {
            path: '/report',
            component: () => import('../../views/report/MyReport.vue'),
            name: '报表',
            iconName: 'iconfont hr-report',
            children: [
                {
                    path:'/report/SaleSummary',
                    name:'商品销售统计',
                    component:()=>import('../../views/report/components/SaleSummary.vue')
                }, {
                    path:'/report/PurchaseSummary',
                    name:'采购进货统计',
                    component:()=>import('../../views/report/components/PurchaseSummary.vue')
                }, {
                    path:'/report/DirectSaleSummary',
                    name:'直销统计',
                    component:()=>import('../../views/report/components/DirectSaleSummary.vue')
                },
            ]
        },
        {
            path: '/product',
            component: () => import('../../views/product/MyProduct.vue'),
            name: '商品',
            iconName: 'iconfont hr-product',
            children: [
                {
                    path: '/product/ProductList',
                    name:'商品信息',
                    component:()=>import('../../views/product/components/ProductList.vue')
                },{
                    path: '/product/ProductCategory',
                    name:'商品分类',
                    component:()=>import('../../views/product/components/ProductCategory.vue')
                },{
                    path: '/product/NameForCustomer',
                    name:'客户品名',
                    component:()=>import('../../views/product/components/NameForCustomer.vue')
                },
            ]
        }, {
            path: '/info',
            component: () => import('../../views/info/MyInfo.vue'),
            name: '资料',
            iconName: 'iconfont hr-info',
            children: [
                {
                    path:'/info/CustomerList',
                    name:'客户',
                    component:()=>import('../../views/info/components/CustomerList.vue')
                }, {
                    path:'/info/CustomerCategory',
                    name:'客户分类',
                    component:()=>import('../../views/info/components/CustomerCategory.vue')
                }, {
                    path:'/info/SupplierList',
                    name:'供应商',
                    component:()=>import('../../views/info/components/SupplierList.vue')
                },
            ]
        }, {
            path: '/setting',
            component: () => import('../../views/setting/MySetting.vue'),
            name: '设置',
            iconName: 'iconfont hr-setting',
            children: [
                {
                    path:'/setting/',
                    name:'基本设置',
                    component:()=>import('../../views/setting/components/BaseSetting.vue')
                },{
                    path:'/setting/BillTmplSetting',
                    name:'单据模板',
                    component:()=>import('../../views/setting/components/BillTmplSetting.vue')
                },{
                    path:'/setting/PrinterSetting',
                    name:'打印机设置',
                    component:()=>import('../../views/setting/components/PrinterSetting.vue')
                },
            ]
        },
    ]
export default routes