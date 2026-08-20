/* ==========================================================================
   HALOBLADEGAME · 众星之环 — 集中数据源
   所有战棋产品、角色志数据、小说站搜索索引统一维护于此文件。
   页面只需读取，不再各自内联一份数据，便于扩展与维护。
   ========================================================================== */
(function (global) {
    'use strict';

    /* 通用：图片路径前缀 */
    var IMG = './picture/';

    /* ------------------------------------------------------------------ */
    /* 战棋产品（商城三页共用）                                            */
    /* 字段覆盖列表页与详情页所需全部信息。                               */
    /* ------------------------------------------------------------------ */
    var products = [
        {
            id: 'the-chosen-blood',
            name: '被选中的血脉',
            title: '被选中的血脉',
            subtitle: '众星之环战棋 · 王选系列 · 稀有收藏卡',
            description: '“王选之血”主题收藏卡，再现沙达尔古族血脉被星环选召的瞬间。卡片采用哑光烫金工艺，星环纹路随光线流转，是战棋收藏家的镇盒之作。',
            price: 899, currentPrice: 899, originalPrice: 1299,
            image: IMG + 'chosen-blood.jpg',
            rating: 4.8, reviewCount: 42,
            pieces: 320, series: '王选系列', age: '12+', stock: '限量版',
            badge: '限量',
            url: './shop1.html?id=the-chosen-blood',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-gem', text: '哑光烫金 · 星环纹' },
                { icon: 'fas fa-cubes', text: '320 组件' }
            ],
            story: '“被选中的血脉”灵感源自王选之血执行部的古老传承。相传沙达尔古族的血脉唯有被星环选召者方能觉醒。这张卡以深红与鎏金为基底，凝固了选召降临、血脉燃烧的瞬间，是整套战棋中最具收藏价值的核心卡之一。',
            featureList: [
                '哑光烫金卡面，星环纹路随角度流转',
                '附赠精装卡套与独立编号收藏证书',
                '含一尊王选血脉专属棋子与底座',
                '适用于众星之环战棋对战规则',
                '独立礼盒包装，含展示支架'
            ],
            specifications: [
                { name: '产品名称', value: '被选中的血脉' },
                { name: '所属系列', value: '众星之环战棋 · 王选系列' },
                { name: '组件数量', value: '320 组件' },
                { name: '适用年龄', value: '12岁以上' },
                { name: '卡面尺寸', value: '63mm × 88mm' },
                { name: '包装尺寸', value: '24cm × 16cm × 6cm' },
                { name: '发售状态', value: '限量版' }
            ],
            reviews: [
                { reviewer: '星环藏家', rating: 5, comment: '烫金工艺非常惊艳，星环纹路在灯光下确实会流动，收藏价值极高。', date: '2023年11月8日' },
                { reviewer: '战棋玩家', rating: 4.5, comment: '棋子做工扎实，规则上手快，和朋友对战体验很棒。', date: '2023年10月26日' }
            ],
            relatedProducts: ['storm-bringers', 'wings-nights', 'land-cannon', 'tactical-advancer']
        },
        {
            id: 'storm-bringers',
            name: '风暴使者',
            title: '风暴使者',
            subtitle: '众星之环战棋 · 战术单位 · 突击型',
            description: '“风暴使者”突击单位卡，以风暴公使执行部的雷厉之风为原型。附带三枚高精度棋子与战场地形卡，适合喜好快攻节奏的指挥官。',
            price: 599, currentPrice: 599, originalPrice: null,
            image: IMG + 'storm-bringers.jpg',
            rating: 4.5, reviewCount: 67,
            pieces: 450, series: '战术单位', age: '10+', stock: '有现货',
            badge: '热卖',
            url: './shop1.html?id=storm-bringers',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-bolt', text: '突击型 · 快攻' },
                { icon: 'fas fa-cubes', text: '450 组件' }
            ],
            story: '风暴使者是众星之环战棋中速度最快的战术单位之一。其设计致敬风暴公使执行部的迅捷战法，强调先手压制与机动穿插，为对局带来瞬息万变的节奏。',
            featureList: [
                '三枚高精度风暴使者棋子',
                '两张专属战场地形卡',
                '突击型战法规则卡一册',
                '适用 2-4 人对战',
                '附赠便携收纳盒'
            ],
            specifications: [
                { name: '产品名称', value: '风暴使者' },
                { name: '所属系列', value: '众星之环战棋 · 战术单位' },
                { name: '组件数量', value: '450 组件' },
                { name: '适用年龄', value: '10岁以上' },
                { name: '棋子尺寸', value: '约 32mm 高' },
                { name: '包装尺寸', value: '28cm × 20cm × 7cm' },
                { name: '发售状态', value: '有现货' }
            ],
            reviews: [
                { reviewer: '战术玩家', rating: 5, comment: '棋子细节到位，快攻玩法很爽快，和朋友玩了好几局。', date: '2023年10月18日' }
            ],
            relatedProducts: ['the-chosen-blood', 'tactical-advancer', 'wings-nights', 'dyxz']
        },
        {
            id: 'wings-nights',
            name: '翼夜骑士团',
            title: '翼夜骑士团',
            subtitle: '众星之环战棋 · 战术单位 · 空中型',
            description: '“翼夜骑士团”空中单位卡，以翼骑士团执行部为蓝本，附带两枚展翅造型棋子与高空作战规则，掌控制空权即掌控战场。',
            price: 699, currentPrice: 699, originalPrice: 899,
            image: IMG + 'wings-nights.jpg',
            rating: 4.6, reviewCount: 38,
            pieces: 380, series: '战术单位', age: '12+', stock: '有现货',
            badge: '促销',
            url: './shop1.html?id=wings-nights',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-feather-alt', text: '空中单位 · 制空' },
                { icon: 'fas fa-cubes', text: '380 组件' }
            ],
            story: '翼夜骑士团是众星之环战棋的空中王牌。展翅的棋子造型与高空作战规则，让指挥官得以从三维维度重新审视战场，体验制空权的决定性意义。',
            featureList: [
                '两枚展翅造型翼夜骑士棋子',
                '高空作战规则卡与飞行支架',
                '一张云层地形卡',
                '适用 2-4 人对战',
                '附赠透明飞行支架与底座'
            ],
            specifications: [
                { name: '产品名称', value: '翼夜骑士团' },
                { name: '所属系列', value: '众星之环战棋 · 战术单位' },
                { name: '组件数量', value: '380 组件' },
                { name: '适用年龄', value: '12岁以上' },
                { name: '棋子尺寸', value: '展翅约 60mm' },
                { name: '包装尺寸', value: '28cm × 20cm × 7cm' },
                { name: '发售状态', value: '有现货' }
            ],
            reviews: [
                { reviewer: '空中战爱好者', rating: 4.5, comment: '飞行支架很稳，制空玩法独特，棋子造型漂亮。', date: '2023年9月30日' }
            ],
            relatedProducts: ['the-chosen-blood', 'storm-bringers', 'land-cannon', 'christopher-romion']
        },
        {
            id: 'land-cannon',
            name: '陆行加农',
            title: '陆行加农',
            subtitle: '众星之环战棋 · 战术单位 · 重装型',
            description: '“陆行加农”重装单位卡，灵感源自陆行战舰（Land Cruiser）的主炮。附带一枚重型棋子与火力覆盖规则，是攻坚与防守的中流砥柱。',
            price: 799, currentPrice: 799, originalPrice: null,
            image: IMG + 'land-cannon.jpg',
            rating: 4.7, reviewCount: 51,
            pieces: 620, series: '战术单位', age: '12+', stock: '有现货',
            badge: '新品',
            url: './shop1.html?id=land-cannon',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-crosshairs', text: '重装 · 火力覆盖' },
                { icon: 'fas fa-cubes', text: '620 组件' }
            ],
            story: '陆行加农致敬小说中碾过荒野的陆行战舰。重装棋子配合火力覆盖规则，让玩家在棋盘上重现主炮齐鸣、大地震颤的史诗场面。',
            featureList: [
                '一枚重型陆行加农棋子',
                '火力覆盖规则卡与弹道标记',
                '两张战场废墟地形卡',
                '适用 2-4 人对战',
                '附赠加固收纳内衬'
            ],
            specifications: [
                { name: '产品名称', value: '陆行加农' },
                { name: '所属系列', value: '众星之环战棋 · 战术单位' },
                { name: '组件数量', value: '620 组件' },
                { name: '适用年龄', value: '12岁以上' },
                { name: '棋子尺寸', value: '约 70mm 长' },
                { name: '包装尺寸', value: '30cm × 22cm × 8cm' },
                { name: '发售状态', value: '有现货' }
            ],
            reviews: [
                { reviewer: '重装玩家', rating: 5, comment: '主炮造型很有压迫感，火力覆盖规则平衡性不错。', date: '2023年11月1日' }
            ],
            relatedProducts: ['the-chosen-blood', 'storm-bringers', 'tactical-advancer', 'wings-nights']
        },
        {
            id: 'tactical-advancer',
            name: '战术先锋',
            title: '战术先锋',
            subtitle: '众星之环战棋 · 战术单位 · 侦察型',
            description: '“战术先锋”侦察单位卡，强调机动与情报。附带两枚轻装棋子与侦察规则，是开局抢占先机的关键力量。',
            price: 549, currentPrice: 549, originalPrice: null,
            image: IMG + 'tactical-advancer.jpg',
            rating: 4.4, reviewCount: 29,
            pieces: 360, series: '战术单位', age: '10+', stock: '有现货',
            badge: null,
            url: './shop1.html?id=tactical-advancer',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-eye', text: '侦察 · 抢占先机' },
                { icon: 'fas fa-cubes', text: '360 组件' }
            ],
            story: '战术先锋是战场上最先抵达的轻装力量。其侦察规则让玩家在开局即可部署情报优势，为后续战术展开奠定基础。',
            featureList: [
                '两枚轻装战术先锋棋子',
                '侦察与隐蔽规则卡一册',
                '一张密林地形卡',
                '适用 2-4 人对战',
                '附赠便携收纳盒'
            ],
            specifications: [
                { name: '产品名称', value: '战术先锋' },
                { name: '所属系列', value: '众星之环战棋 · 战术单位' },
                { name: '组件数量', value: '360 组件' },
                { name: '适用年龄', value: '10岁以上' },
                { name: '棋子尺寸', value: '约 30mm 高' },
                { name: '包装尺寸', value: '26cm × 19cm × 6cm' },
                { name: '发售状态', value: '有现货' }
            ],
            reviews: [
                { reviewer: '策略玩家', rating: 4, comment: '侦察玩法让开局更有深度，适合喜欢布局的玩家。', date: '2023年10月5日' }
            ],
            relatedProducts: ['storm-bringers', 'dyxz', 'wings-nights', 'the-chosen-blood']
        },
        {
            id: 'christopher-romion',
            name: '克里斯托弗·罗米恩',
            title: '克里斯托弗·罗米恩',
            subtitle: '众星之环战棋 · 角色卡 · 指挥官',
            description: '指挥官角色卡“克里斯托弗·罗米恩”，附带一尊专属棋子与指挥官技能卡，拥有足以扭转战局的专属指挥技能。',
            price: 999, currentPrice: 999, originalPrice: 1299,
            image: IMG + 'christopher-romion.jpg',
            rating: 4.9, reviewCount: 24,
            pieces: 280, series: '角色卡', age: '14+', stock: '限量版',
            badge: '限量',
            url: './shop1.html?id=christopher-romion',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-crown', text: '指挥官 · 专属技能' },
                { icon: 'fas fa-cubes', text: '280 组件' }
            ],
            story: '克里斯托弗·罗米恩是指挥官系列的首发角色卡。其专属技能强调全局调度，让指挥官型玩家得以运筹帷幄、决胜千里。',
            featureList: [
                '一尊指挥官专属棋子',
                '三张指挥官技能卡',
                '独立编号收藏证书',
                '适用众星之环战棋对战规则',
                '附赠精装展示盒'
            ],
            specifications: [
                { name: '产品名称', value: '克里斯托弗·罗米恩' },
                { name: '所属系列', value: '众星之环战棋 · 角色卡' },
                { name: '组件数量', value: '280 组件' },
                { name: '适用年龄', value: '14岁以上' },
                { name: '棋子尺寸', value: '约 40mm 高' },
                { name: '包装尺寸', value: '24cm × 16cm × 6cm' },
                { name: '发售状态', value: '限量版' }
            ],
            reviews: [
                { reviewer: '指挥官玩家', rating: 5, comment: '专属技能设计巧妙，棋子质感一流，绝对值回票价。', date: '2023年11月12日' }
            ],
            relatedProducts: ['the-chosen-blood', 'dyxz', 'land-cannon', 'storm-bringers']
        },
        {
            id: 'dyxz',
            name: '暗夜行者',
            title: '暗夜行者',
            subtitle: '众星之环战棋 · 战术单位 · 隐秘型',
            description: '“暗夜行者”隐秘单位卡，附带两枚潜行造型棋子与伏击规则，善于在阴影中一击制胜。',
            price: 649, currentPrice: 649, originalPrice: null,
            image: IMG + 'dyxz.jpg',
            rating: 4.5, reviewCount: 33,
            pieces: 340, series: '战术单位', age: '12+', stock: '有现货',
            badge: null,
            url: './shop1.html?id=dyxz',
            features: [
                { icon: 'fas fa-shipping-fast', text: '免费配送（订单满¥399）' },
                { icon: 'fas fa-undo-alt', text: '90天无忧退货' },
                { icon: 'fas fa-mask', text: '隐秘 · 伏击' },
                { icon: 'fas fa-cubes', text: '340 组件' }
            ],
            story: '暗夜行者擅长在阴影中游走。伏击规则让对手每一步都如履薄冰，为对局增添紧张的心理博弈。',
            featureList: [
                '两枚潜行造型暗夜行者棋子',
                '伏击与潜行规则卡一册',
                '一张夜影地形卡',
                '适用 2-4 人对战',
                '附赠便携收纳盒'
            ],
            specifications: [
                { name: '产品名称', value: '暗夜行者' },
                { name: '所属系列', value: '众星之环战棋 · 战术单位' },
                { name: '组件数量', value: '340 组件' },
                { name: '适用年龄', value: '12岁以上' },
                { name: '棋子尺寸', value: '约 32mm 高' },
                { name: '包装尺寸', value: '26cm × 19cm × 6cm' },
                { name: '发售状态', value: '有现货' }
            ],
            reviews: [
                { reviewer: '暗影玩家', rating: 4.5, comment: '伏击规则很有意思，潜行造型棋子细节满满。', date: '2023年10月22日' }
            ],
            relatedProducts: ['tactical-advancer', 'storm-bringers', 'christopher-romion', 'the-chosen-blood']
        }
    ];

    /* 便捷索引：按 id 查产品 */
    var productMap = {};
    products.forEach(function (p) { productMap[p.id] = p; });

    /* ------------------------------------------------------------------ */
    /* 角色志数据（character1/2/3 共用）                                   */
    /* ------------------------------------------------------------------ */
    var characters = {
        /* 星环行者 */
        starRunners: {
            title: '众星之环 · 个人志',
            tagline: '星光为引，书写传奇',
            tags: [
                { label: '艾卡纳罗', img: IMG + 'c1.jpg', text: '“奎隆之刃”塔尔-艾卡纳罗，猎影者执行部与栖桐台执行部双选的五阶执行官，王爵级中阶，追猎者刃卫荣誉头衔拥有者，年轻的异种之灾、异端之祸。身为龙裔与焱族共同血脉的后代，其继承了乌提卡帝国先祖的骄傲与力量，在如今黑云压城的局势之下，誓要带领崭新的执行局与黑暗之主决一死战。' },
                { label: '青川弘一', img: IMG + 'c2.jpg', text: '“惊霆”青川弘一，猎影者执行部远东局总长，五阶执行官，王爵级中阶，追猎者刃卫荣誉头衔拥有者，岩山大将军。继承古老家格的惊霆王爵同时身负伟大命运和深重诅咒，在遍历大陆的浪人生涯中他将在每一个十字路口做出黑暗或光明的艰难抉择，始终以手中之剑印证心中之道。' },
                { label: '穆越', img: IMG + 'c3.jpg', text: '“溯风神剑”穆越，栖桐台执行部南洋局总长，五阶执行官，王爵级中阶，追猎者刃卫荣誉头衔拥有者，清州公。崇高、强大和无私精神在菁英一代年轻执行官中的化身，自幼受到沉重责任束缚的他从未真正将任何与己相关的事物放在首位，即便身心俱疲也始终得体且坚韧地用言辞与刀剑同任何异己抗争。' },
                { label: '凯伊兰·费雅图瑞', img: IMG + 'c4.jpg', text: '“银辉”凯伊兰·费雅图瑞，风暴公使执行部五阶执行官，王爵级中阶，追猎者刃卫荣誉头衔拥有者，艾多雷斯帝国公主。相比于凌厉的能力锋芒，优雅美丽的外表只是这位年轻兰希族公主最微不足道的特质。在了却权斗驳杂后，她如今更倾向于将热爱和忠诚投注于挚友艾卡纳罗和其团队的伟大事业中。' },
                { label: '伊莉亚·艾哈迈德', img: IMG + 'c5.jpg', text: '伊莉亚·艾哈迈德，王选之血执行部五阶执行官，王爵级初阶，追猎者刃卫荣誉头衔拥有者。不同于绝大多数沙达尔人民的想象，伊莉亚并不出身于她冠名的古老家族。作为在路加古兰格城市底层阴影里拼斗出来的执行官，她比任何人都更加清楚和憎恨异种的存在。爱与友谊于她而言比一千个月亮价值更高。' },
                { label: '维亚特卡·莫罗佐夫', img: IMG + 'c6.jpg', text: '“冬狼主”维亚特卡·莫罗佐夫，地狱行者执行部北境局总长，五阶执行官，王爵级中阶，追猎者刃卫荣誉头衔拥有者，冬狼领主。作为莫罗佐夫家族当代冬狼领主，他对凛吉亚特北境人民肩负着巨大的责任。如今崇高的使命感驱使他加入更伟大的事业，在对抗黑暗之主的战争中他将更好地守护爱戴自己的子民。' },
                { label: '卡利斯塔·唐德利恩', img: IMG + 'c7.jpg', text: '“王者之剑”卡利斯塔·唐德利恩，翼骑士团执行部剑刃兄弟会成员，五阶执行官，王爵级初阶，洛昆大骑士。荣誉，英勇，崇高，牺牲，骑士精神的准则束缚也激励着他的前进。作为洛昆大骑士领当之无愧的菁英，卡利斯塔始终奋战在抵御黑暗力量的第一线。如今他即将带领自己的兄弟会加入针对黑暗之主的战争。' }
            ],
            bookmarks: [
                { bg: IMG + 'c8.jpg', label: '散漫群星', url: './character3.html' },
                { bg: IMG + 'c10.jpg', label: '漆黑夜幕', url: './character2.html' }
            ]
        },
        /* 漆黑夜幕 */
        darkNight: {
            title: '众星之环 · 个人志',
            tagline: '星光为引，书写传奇',
            tags: [
                { label: '瑟隆达斯-梅奥伦', img: IMG + 'c10.jpg', text: '“黑死剑”瑟隆达斯-梅奥伦，安卡隆德王国卡诺兰特公爵，第一摄政，国防与政务总辖，王爵级巅峰。作为安卡隆德当代势力最为庞大的权臣，诸龙血裔之中最令人恐惧的存在，梅奥伦公爵以其严苛无情的铁腕统治以及那柄为人称道却又神秘莫测的佩剑闻名。即便受到再多质疑和否定，也无法阻挡他带领诸龙血裔重现昔日辉煌的决心。' },
                { label: '维隆瑟斯', img: IMG + 'c11.jpg', text: '“远逐者”维隆瑟斯，冰海之子组织近东议员，贝希摩斯级异种，王爵级巅峰，前安卡隆德第三集团军第12装甲步兵团团长。作为安卡隆德王国最深重的悲伤，他的存在不但是一道耻辱疤痕，更打破了龙裔一族绝不可能被异化的传说。即便成为了高位异种，他也始终认同自己对于安卡隆德的忠诚。在内心深处他始终是安卡隆德的上校军官。' },
                { label: '乌斯维亚德', img: IMG + 'c12.jpg', text: '“大先知”乌斯维亚德，冰海之子组织真言大导师，娜迦级异种，王爵级极限，古老灾厄化身。这名古老异种的起源早已无法深究，不可靠信息表明它曾亲眼见证乌提卡帝国的陨落。强壮的肢体和可怖的力量对它都不是必要的，它来自万古的低沉亡语足以撕碎绝大多数生灵的精神防线，只有最英勇强大的执行官才能挺身面对它。' },
                { label: '萨米基纳', img: IMG + 'c13.jpg', text: '“拥灵之主”萨米基纳，黑暗异端势力“影主秘会”死灵大导师，王爵级高阶，黑暗使徒。作为黑暗之主在文明世界的代言者之一，他是真正踏足生与死两界之间的灵魂术师。无人能够真正摸清其全部实力和底牌，但其所能够引发的庞大灾厄和对黑暗之主的绝对忠诚都让他成为了令全部文明势力恐惧的异端存在。' }
            ],
            bookmarks: [
                { bg: IMG + 'c1.jpg', label: '星环行者', url: './character1.html' },
                { bg: IMG + 'c8.jpg', label: '散漫群星', url: './character3.html' }
            ]
        },
        /* 散漫群星 */
        scatteredStars: {
            title: '众星之环 · 个人志',
            tagline: '星光为引，书写传奇',
            tags: [
                { label: '宇文玥', img: IMG + 'c8.jpg', text: '宇文玥，阅阳大学社会科学院高等神秘术史学博士，教授职称，公爵级一阶，文靖侯世女。作为桐朝皇族众多支脉中普通的后裔，不过于优渥且无权力纷争的生活培养了她聪慧的头脑和优雅的气质。但即便拥有渊博的学识和远超外表的战力，她依旧难以在协助对抗黑暗之主的事业中保全自己。' },
                { label: '埃蒙·冯·施利恩', img: IMG + 'c9.jpg', text: '埃蒙·冯·施利恩，艾多雷斯帝国防长，至高领主上将，王爵级入门，当之无愧的战争之主。没有其他王爵级同阶的战力，埃蒙上将的才能集中体现于其出神入化的军事艺术。公认的一点是，没有他无法驾驭的战争，没有他无法指挥的军队。只要有他镇守，即便黑暗之主的大军也难以突入帝国的防线。' }
            ],
            bookmarks: [
                { bg: IMG + 'c1.jpg', label: '星环行者', url: './character1.html' },
                { bg: IMG + 'c10.jpg', label: '漆黑夜幕', url: './character2.html' }
            ]
        }
    };

    /* ------------------------------------------------------------------ */
    /* 小说站搜索索引（HTMLPage1 使用）                                    */
    /* ------------------------------------------------------------------ */
    var novelSearch = [
        { title: '序章：转封之日', content: '数千年前，乌提卡人(Utikerien)相信大地和天空都拥有各自的记忆。它们至高的意志就体现在世间万物陆离的命运之中。', url: './chapter1.html', type: '章节' },
        { title: '第一章：混血龙裔', content: '塔尔-艾卡纳罗的沉默已经持续了很久。窗外的细雨停了又下。天空的色彩像是混合在雨水中脱落了一般，只剩下朦胧的灰色。', url: './chapter1.html?chapter=chapter1', type: '章节' },
        { title: '第二章：渎职之罪', content: '裴赫杜恩-塔里楠面无表情地挥手遣散了十二个小时前慌忙组建的参谋部。', url: './chapter1.html?chapter=chapter2', type: '章节' },
        { title: '埃兰图尔', content: '一个谱写不朽之荣耀的大地，人类刚刚从深渊一般的战争中醒来，执行官们正背负着牺牲，维持那稳固而脆弱的秩序。', url: './HTMLPage1.html#setting', type: '设定' },
        { title: '乌提卡帝国', content: '如今东大陆四国文明共同的先祖、人类文明发展史的至高巅峰、不可复制的伟大奇迹——乌提卡帝国。', url: './HTMLPage1.html#setting', type: '设定' },
        { title: '神秘术', content: '现代神秘术是古典神秘术，物质技术和现代科学的结合。本质上是通过意识引导来使用源流，实现元素生成与操控、增幅和附魔等效果。', url: './HTMLPage1.html#setting', type: '设定' },
        { title: '执行局', content: '央都新秩序建立以来，世界各国一直寻求一种尽可能避免战争的国际对抗方案。同时为了应对长期威胁人类的奇美拉威胁，各国执行局应运而生。', url: './HTMLPage1.html#setting', type: '设定' },
        { title: '奇美拉', content: '千年内人类最大的威胁，那些来自落陷时代的亵渎法术创造了这些臃肿、扭曲、疯狂的半人生物。', url: './HTMLPage1.html#setting', type: '设定' },
        { title: '艾卡纳罗', content: '“奎隆之刃”塔尔-艾卡纳罗，猎影者执行部与栖桐台执行部双选的五阶执行官，王爵级中阶。', url: './HTMLPage1.html#characters', type: '人物' },
        { title: '青川弘一', content: '“惊霆”青川弘一，猎影者执行部远东局总长，五阶执行官，王爵级中阶，岩山大将军。', url: './HTMLPage1.html#characters', type: '人物' },
        { title: '穆越', content: '“溯风神剑”穆越，栖桐台执行部南洋局总长，五阶执行官，王爵级中阶，清州公。', url: './HTMLPage1.html#characters', type: '人物' },
        { title: '凯伊兰·费雅图瑞', content: '“银辉”凯伊兰·费雅图瑞，风暴公使执行部五阶执行官，王爵级中阶，艾多雷斯帝国公主。', url: './HTMLPage1.html#characters', type: '人物' },
        { title: '不是历史教授者', content: '“历史也是随着潮流变化的，纪小姐。”', url: './chapter3.html', type: '短篇' },
        { title: '走过的地方', content: '青川弘一终于回到了那条石子路。他此前刻意把速度放的很慢。', url: './chapter3.html?chapter=s2', type: '短篇' },
        { title: '断章：上一世代', content: '央都国际执行官联合会，全球巡查第一小组。', url: './chapter3.html?chapter=s3', type: '短篇' }
    ];

    /* ------------------------------------------------------------------ */
    /* 导出                                                                */
    /* ------------------------------------------------------------------ */
    global.HB_DATA = {
        products: products,
        productMap: productMap,
        characters: characters,
        novelSearch: novelSearch
    };
})(window);
