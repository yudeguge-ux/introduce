import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Layout, 
  Bot, 
  ShieldCheck, 
  GitBranch, 
  Briefcase, 
  GraduationCap, 
  BarChart2, 
  Search, 
  Code, 
  BookOpen,
  ChevronRight
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            夏雨 | Xia Yu
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">核心能力</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">工作经历</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">教育背景</a>
          </div>
          <a href="mailto:1196350794@qq.com" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
            联系我
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white">
            金融交易智能化 <br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              产品经理
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            3年金融交易中台经验，专注构建银行间交易执行与前置风控系统。主导多资产OMS与AI询报价系统设计，实现复杂交易链路的自动化与工程化重构。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
              <Phone className="w-4 h-4 text-blue-400" /> 15254109003
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
              <Mail className="w-4 h-4 text-blue-400" /> 1196350794@qq.com
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-blue-400" /> 上海市浦东新区
            </div>
          </div>
        </section>

        {/* 核心能力 Grid */}
        <section id="about" className="max-w-6xl mx-auto mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span> 核心能力
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityCard 
              icon={<Layout className="w-6 h-6" />}
              title="交易系统架构"
              desc="构建多资产智能交易架构，实现自动询价、策略报价与实时风控的STP链路。"
            />
            <CapabilityCard 
              icon={<Bot className="w-6 h-6" />}
              title="AI产品落地"
              desc="精通NLP意图识别、NER在金融非结构化文本中的应用，设计智能交互机器人。"
            />
            <CapabilityCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="风控管理逻辑"
              desc="深度理解现券、IRS、回购交易机制，具备Pre-trade风险控制点位设计经验。"
            />
            <CapabilityCard 
              icon={<GitBranch className="w-6 h-6" />}
              title="敏捷产品管理"
              desc="全生命周期需求管理，Scrum敏捷实践，保障高合规场景下的系统级稳定交付。"
            />
          </div>
        </section>

        {/* 工作经历 */}
        <section id="experience" className="max-w-4xl mx-auto mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span> 工作经历
          </h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-slate-950"></div>
              
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">产品需求分析师</h3>
                  <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mt-1">
                    中汇亿达金融信息技术有限公司 (ComStar)
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  2023.03 – 2026.03
                </span>
              </div>

              {/* 项目 1 */}
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 mb-6 hover:border-blue-500/30 transition-colors group">
                <h4 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  银行间智能交易执行系统 (AI询报价机器人)
                </h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>基于NLP+决策引擎实现自动询价、动态策略报价与实时风控校验，已支撑 <strong>9家大型银行</strong> 自动化交易。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>设计双边报价、换券等复杂流程，单机构日均处理询价 <strong>100+笔</strong>，具备高并发低延迟能力。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>打造标准化API集成中枢，对接量化系统及 iDeal 等聊天工具，成为核心价源中心。</span>
                  </li>
                </ul>
              </div>

              {/* 项目 2 */}
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-colors group">
                <h4 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  多资产统一订单管理系统 (OMS)
                </h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>统一治理多源异构意向数据，日均处理 <strong>300+笔</strong>，显著提升合规透明度。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>机构自动化处理占比达 <strong>75%</strong>，将Pre-trade风控前移，显著收敛人工介入环节。</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>基于SoD原则设计权限模型，实现Sales与Trader职责分离，满足强监管审计要求。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 实习 & 调研 Grid */}
        <section className="max-w-6xl mx-auto mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span> 实习与研究项目
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem 
              icon={<BarChart2 />}
              title="债券承做 | 申港证券"
              time="2022.11 – 2022.12"
              content="参与项目尽调与申报材料编写，支持ABS融资方案设计并推进项目过审。"
            />
            <ProjectItem 
              icon={<Search />}
              title="行研助理 | 海通证券"
              time="2022.07 – 2022.10"
              content="构建光伏、原油数据库，撰写20余份公司跟踪及行业研究报告。"
            />
            <ProjectItem 
              icon={<Code />}
              title="年报文本相似度量化策略"
              content="提取近20年年报特征，通过文本相似度验证收益率显著关系，构建超额收益组合。"
            />
            <ProjectItem 
              icon={<BookOpen />}
              title="套期保值会计研究"
              content="编写企业套保案例分析，研究规则变动影响；成果发表于《国际商务财会》。"
            />
          </div>
        </section>

        {/* 教育背景 */}
        <section id="education" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span> 教育背景
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <GraduationCap className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">上海国家会计学院</h3>
              <p className="text-blue-400 font-medium mb-4">金融硕士 (GPA: 3.46)</p>
              <p className="text-slate-500 text-sm">2021 - 2023 | 衍生工具、机器学习、智能财务</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <GraduationCap className="w-10 h-10 text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">山东财经大学</h3>
              <p className="text-slate-400 font-medium mb-4">信用管理学士 (GPA: 3.76)</p>
              <p className="text-slate-500 text-sm">2016 - 2020 | 信用风险、计量经济学、投资评估</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm mb-4 italic">“致力于用AI与数据驱动金融交易的下一次迭代”</p>
        <p className="text-slate-700 text-xs">© 2026 夏雨. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

// 辅助组件：核心能力卡片
const CapabilityCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-bold text-slate-200 mb-3 text-lg">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

// 辅助组件：项目/实习项
const ProjectItem = ({ icon, title, time, content }) => (
  <div className="flex gap-6 p-4 rounded-2xl hover:bg-slate-900/30 transition-colors">
    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <h3 className="font-bold text-slate-200">{title}</h3>
      {time && <p className="text-xs font-mono text-slate-600 my-1">{time}</p>}
      <p className="text-sm text-slate-500 mt-2 leading-relaxed">{content}</p>
    </div>
  </div>
);

export default App;
