# 贾振华 - 个人简历作品集

## 项目描述
一个展示个人专业能力的前端作品集网站。4 年 Java 全栈 | 主导 1 套云原生多租户 SaaS 从 0 到 1 上线及 5 个项目按期交付，用于求职展示。采用Apple级别的前端工程标准，实现像Keynote一样的丝滑滚动体验。

**个人信息**
- 姓名：贾振华
- 年龄：23岁
- 性别：男
- 工作经验：4年
- 联系：185-7414-7975 | zhenhua7975@163.com
- 求职岗位：Java开发/项目经理
- 意向城市：上海
- 期望薪资：13-15k
- 入职时间：到岗时间另行商议

## 教育背景
*安阳职业技术学院 网站工程师*

## 项目特点
- **滚动叙事**：IntersectionObserver + position: sticky 实现Keynote级滚动翻页
- **像素级栅格**：12-column弹性栅格，极少断点，指数级列间距
- **流式排版**：calc()动态字号，字距微调，完美响应式
- **WebGL微动效**：轻量着色器，60fps锁帧，GPU占用<15%
- **色彩品牌**：主色+强调色+中性灰，CSS color() + display-p3色域
- **无障碍打磨**：prefers-reduced-motion支持，高对比度，SEO友好
- **性能铁律**：首屏≤2.5MB，LCP<1.8s，TTI<2.5s

## 项目结构
```
Personal Resume/
├── README.md                    # 项目说明文件
├── package.json                 # 项目配置
├── vite.config.ts              # Vite配置
├── tsconfig.json               # TypeScript配置
├── src/
│   ├── main.tsx                # 入口文件
│   ├── App.tsx                 # 主应用组件
│   ├── index.css               # 全局样式
│   ├── components/
│   │   ├── Chapter.tsx         # 章节容器（data-chapter）
│   │   ├── Hero.tsx            # 首页章节
│   │   ├── About.tsx           # 关于章节
│   │   ├── Skills.tsx          # 技能章节
│   │   ├── Projects.tsx        # 项目章节
│   │   ├── Contact.tsx         # 联系章节
│   │   └── ParticleBackground.tsx  # WebGL粒子
│   ├── hooks/
│   │   ├── useScrollytelling.ts    # 滚动叙事hook
│   │   ├── useIntersectionObserver.ts # 交叉观察器
│   │   └── useWebGL.ts             # WebGL着色器
│   ├── styles/
│   │   ├── variables.css       # CSS变量 + 色彩系统
│   │   ├── grid.css            # 12-column栅格
│   │   ├── typography.css      # 流式排版 + 字重
│   │   └── animations.css      # GPU加速动画
│   └── utils/
│       └── performance.ts      # 性能监控
├── public/
│   └── fonts/                  # SF Pro字体家族（6种字重）
└── dist/                        # 构建输出
```

## 工作经验

### 上海讯谨信息技术有限公司 (2021-06 ~ 至今) - 项目经理
**核心职责**
- 负责所属模块的功能开发、调试与维护工作
- 制定项目规划，攻克项目技术难点，保证项目按时交付
- 跟进核心项目、主导业务分析和设计工作，承担核心功能和公共模块的代码编写、技术文档编写
- 线上项目的新需求开发和运维工作

**技术能力**
- 编程能力：熟悉Java编程语言，具有良好的编码习惯，熟悉面向对象编程思想
- 架构概念：了解SaaS、多租户、数据物理和逻辑双隔离等概念
- 操作系统和容器：熟悉Linux操作系统，熟练使用Docker容器化部署、Harbor镜像仓库、Kubernetes容器编排
- 分布式技术栈：熟悉Spring Boot Cloud、Nacos、Nginx、RabbitMQ、Gateway、OpenFeign等
- 后端框架：熟悉Spring、Spring MVC、Spring Boot Cloud、MyBatis、Redis
- 开发工具：熟练使用IDEA、Git、Maven、HBuilder、Tomcat、Jenkins
- 前端开发：掌握JavaScript、Ajax、jQuery、Layui、Vue、Element-UI
- 数据库：熟练使用MySQL，了解SqlServer，熟悉SQL优化
- CI/CD和运维：了解CI/CD持续集成部署，了解Ansible运维

## 项目经验

### SmartAlert Online (2022-04 ~ 2023-12) - 项目经理/开发
**项目概述**
- 多租户云环境下的IT运维管理服务，采用前后端分离模式
- 为企业提供安全、稳定、高效的数字生态系统
- 集成云原生监控和报警技术，支持企业微信、钉钉、微信公众号、飞书等ChatOps工具

**技术架构**
- 后端：Spring Boot Cloud & Alibaba + Kubernetes + MyBatis + Nacos + RabbitMQ + Redis
- 前端：Vue3
- 环境：IDEA + Git + MySQL + Nginx + CentOS

**核心职责与成就**
- 需求分析和系统设计：负责分析项目需求，设计系统架构，编写相关文档
- 项目计划制定和进度协调：制定项目计划，与团队协调沟通，确保进度和人员配备合理
- 自动化部署：负责项目自动化部署，包括环境配置、CI/CD流程优化
- 核心代码编写：编写项目核心代码和公共代码，确保代码质量和可维护性
- 前端开发：参与前端页面设计和开发，提供良好的用户体验
- 功能模块开发：负责租管、租户和公众号系统功能模块开发，与ChatOps工具对接，实现消息推送和通知功能

### 车熙熙 (2021-09 ~ 至今) - 开发/实施/运维
**项目概述**
- 根据国家相关主管部门要求开发的二手车交易服务平台
- 为买卖车用户提供合法、权威、全面、实时的车辆历史信息
- 与车信盟的车信报告和维保报告接口对接

**技术架构**
- 后端：Spring Boot + Redis + MyBatis + Maven
- 前端：Vue3
- 环境：IDEA + Git + HbuildX + Tomcat 8.5 + MySQL + Nginx + CentOS

**核心职责与成就**
- 需求分析：参与整体需求分析，协助制定系统架构，提供相关建议
- 后端开发：负责后端业务代码开发，包括数据处理、接口开发
- 前端开发：负责公众号页面设计和开发，提供良好的用户体验
- 接口文档：编写接口文档，确保接口准确性和规范性
- 系统测试：参与系统测试，确保系统稳定性和功能完整性
- 第三方对接：负责与第三方接口对接
- 产品运维：参与产品后续运维和开发工作，与客户沟通解决问题和需求

## 核心技能

### 后端技术（精通）
- **编程语言**：Java
- **框架**：Spring、Spring Boot、Spring Cloud & Alibaba
- **分布式**：Nacos、RabbitMQ、Gateway、OpenFeign、Nginx
- **容器**：Docker、Kubernetes、Harbor
- **数据库**：MySQL、Redis
- **ORM**：MyBatis

### 前端技术（精通）
- **语言**：JavaScript、HTML5、CSS3
- **框架**：Vue3、Element-UI、Layui
- **工具**：Ajax、jQuery

### 开发工具（熟练）
- IDEA、Git、Maven、Jenkins、HBuilder
- Linux、CentOS、Tomcat
- Ansible

### 架构与运维（熟练）
- SaaS、多租户、数据隔离
- CI/CD持续集成部署
- 系统架构设计与优化

## 个人优势
- 能够快速适应各种工作环境，具有良好的分析能力、自学能力和适应能力
- 工作积极进取，对IT领域的软件开发和设计工作有浓厚兴趣
- 具有良好的职业操守、组织及沟通协调能力、团队精神和强烈的自我实现要求

## 证书与荣誉
- MCP证书
- ACA阿里云助理工程师
- Microsoft Office Specialist证书

## 职业规划
*短期：半年内把云原生与低代码平台深度结合，带队落地2个可复制的SaaS模板，让个人价值=公司营收增量。
长期：十年内沉淀为“懂商业的技术合伙人”，孵化出1个全球化多租户PaaS，用代码帮百万企业降本增效，也让自己实现财富自由。*

## 团队管理经验
*5人*

## 功能模块

### 章节架构（Scrollytelling）
- 单一`<main>`容器，10个章节（data-chapter属性）
- IntersectionObserver监听章节进入视口
- position: sticky实现章节锚定
- transform: translate3d GPU级平滑过渡

### 章节内容
- **Hero**：个人简介、职位、粒子背景
- **About**：基本信息、求职岗位
- **Skills**：技能展示、进度条动画
- **Projects**：项目经历、卡片交互
- **Contact**：联系方式、社交链接

## 技术栈

### 核心框架
- **React 18** + TypeScript
- **Vite** 构建工具
- **Lenis** 平滑滚动

### 样式系统
- **CSS Grid** 12-column栅格
- **CSS Variables** 色彩系统
- **font-variation-settings** 动态字重
- **calc()** 流式排版

### 动画与交互
- **Framer Motion** 声明式动画
- **WebGL** 轻量着色器
- **IntersectionObserver** 章节检测
- **requestAnimationFrame** 60fps锁帧

### 性能优化
- **图片四级回退**：HEIC → JPEG 2000 → WebP → JPEG
- **JS分块懒加载**：按章节加载
- **字体预加载**：link rel="preload" 6种字重
- **性能监控**：LCP、TTI、CLS追踪

## 设计系统

### 色彩体系
```css
--primary: #0a0e27;      /* 主色 */
--accent: #00d4ff;       /* 强调色 */
--neutral-light: #e0e0e0;
--neutral-dark: #a0a0a0;
color-space: display-p3; /* Mac P3色域 */
```

### 栅格系统
- 12-column弹性栅格
- 断点：320px / 768px / 1024px / 1440px / 1920px
- 列间距：calc(1rem + 0.5vw)
- 大留白设计

### 流式排版
```css
font-size: calc(1rem + 0.3vw);
font-variation-settings: 'wght' 590;
letter-spacing: calc(0.02em + 0.1vw);
```

### 无障碍支持
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

## 性能指标

### 性能预算
- 首屏网络总负载：≤2.5 MB
- LCP (Largest Contentful Paint)：< 1.8 s
- TTI (Time to Interactive)：< 2.5 s
- CLS (Cumulative Layout Shift)：< 0.1

### 优化策略
- 图片清一色四级回退
- `<source>` 标签内联HTML减少RTT
- JS按章节懒加载
- WebGL纹理尺寸≤512px
- GPU占用<15%

## 使用说明

### 开发环境
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 性能分析
npm run analyze

# 预览生产版本
npm run preview
```

### 修改内容
1. 色彩系统：编辑 `src/styles/variables.css`
2. 栅格布局：编辑 `src/styles/grid.css`
3. 章节内容：编辑 `src/components/Chapter.tsx`
4. 字体配置：修改 `public/fonts/` 和 `src/styles/typography.css`

## 部署
暂不部署，本地开发阶段

## 开发计划
- [ ] 搭建12-column栅格系统
- [ ] 集成SF Pro字体家族（6种字重）
- [ ] 实现IntersectionObserver章节检测
- [ ] 开发position: sticky章节锚定
- [ ] 实现translate3d GPU平滑过渡
- [ ] 构建WebGL轻量着色器系统
- [ ] 配置图片四级回退方案
- [ ] 实现性能监控（LCP/TTI/CLS）
- [ ] 添加prefers-reduced-motion支持
- [ ] WebPageTest P75性能验证

---
*最后更新时间：2024年*
