import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  TrendingUp, 
  Shield, 
  Cpu, 
  ChevronRight,
  Download,
  ExternalLink,
  MessageSquare,
  Award
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 简历核心数据
  const profile = {
    name: "夏 雨",
    title: "金融交易智能化产品经理",
    subTitle: "专注银行间交易执行与前置风控中台",
    phone: "15254109003",
    email: "1196350794@qq.com",
    location: "上海市浦东新区",
    summary: "3年金融交易智能化产品经验，主导设计多资产OMS与AI询报价系统。具备金融硕士背景与数据能力，擅长在高合规场景下完成AI产品落地与系统级架构设计。"
  };

  const skills = [
    { name: "交易系统架构", icon: <Layers size={18} />, desc: "多资产STP链路、自动询价、策略报价" },
    { name: "AI 产品落地", icon: <Cpu size={18} />, desc: "NLP意图识别、NER、决策引擎" },
    { name: "风险管理", icon: <Shield size={18} />, desc: "Pre-trade风控、授信/限额管理" },
    { name: "产品全生命周期", icon: <TrendingUp size={18} />, desc: "Scrum敏捷、需求拆解、PRD/交付" }
  ];

  const experiences = [
    {
      company: "中汇亿达金融信息技术有限公司 (ComStar)",
      role: "产品需求分析师",
      period: "2023.03 – 2026.03",
      projects: [
        {
          name: "银行间智能交易执行系统 (AI询报价机器人)",
          highlights: [
            "构建覆盖现券、IRS、回购的STP链路，实现自动询价与风控校验。",
            "支撑9家大型银行自动化辅助交易，单机构日均处理100+笔询价。",
            "打造标准化API集成中枢，连接iDeal、分销平台及策略系统。"
          ]
        },
        {
          name: "多资产统一订单管理系统 (OMS)",
          highlights: [
            "重构交易链路，机构自动化处理占比达75%，显著缩短达成周期。",
            "前移Pre-trade风控至意向阶段，强化合规控制。",
            "基于SoD原则设计矩阵式权限，满足“前中后台分离”内控要求。"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* 导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-sm">夏</div>
            <span>XIA YU</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['首页', '能力', '经历', '教育'].map((item, idx) => (
              <a key={idx} href={`#${['home', 'skills', 'experience', 'education'][idx]}`} className="hover:text-indigo-400 transition-colors">{item}</a>
            ))}
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2">
              <Download size={14} /> 下载简历
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                目前处于：上海 · 开放合作
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{profile.name}</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                {profile.title}。{profile.subTitle}。
                <span className="block mt-4 text-lg border-l-2 border-indigo-500 pl-4 bg-white/5 py-2 italic">
                  "{profile.summary}"
                </span>
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 text-sm text-slate-400">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg"><Phone size={16}/> {profile.phone}</div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg"><Mail size={16}/> {profile.email}</div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg"><MapPin size={16}/> {profile.location}</div>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-xl shadow-indigo-600/20 transition-all flex items-center gap-2">
                   立即联络 <ChevronRight size={18} />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                  查看项目集
                </button>
              </div>
            </div>

            <div className="w-64 h-64 md:w-80 md:h-80 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-3xl flex items-center justify-center overflow-hidden border border-white/10">
                {/* 占位头像或图标 */}
                <User size={120} className="text-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心能力 Section */}
      <section id="skills" className="py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-3">Core Competencies</h2>
            <p className="text-3xl font-bold text-white">核心专业能力</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-indigo-600/10 hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经历 Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-3">Career Path</h2>
              <p className="text-3xl font-bold text-white">职业历程</p>
            </div>
            <div className="text-slate-500 text-sm font-mono">3 Years of FinTech Experience</div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* 时间轴线 */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10"></div>
                
                <div className={`md:flex items-start gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative">
                      <div className="absolute top-1/2 -translate-y-1/2 hidden md:block w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#050505] z-10" 
                           style={{ [idx % 2 === 0 ? 'left' : 'right']: '-42px' }}></div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-indigo-400 font-bold text-sm">{exp.period}</span>
                        <Briefcase size={16} className="text-slate-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="text-indigo-300 font-medium mb-6">{exp.role}</p>
                      
                      <div className="space-y-6">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx}>
                            <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                              {proj.name}
                            </h4>
                            <ul className="space-y-2">
                              {proj.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="text-slate-400 text-sm flex gap-2">
                                  <span className="text-indigo-500/50 mt-1">•</span> {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 教育与实习 Section */}
      <section id="education" className="py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 教育背景 */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <BookOpen className="text-indigo-500" />
                <h2 className="text-2xl font-bold text-white">教育背景</h2>
              </div>
              <div className="space-y-8">
                <EduCard 
                  school="上海国家会计学院" 
                  degree="金融硕士 (GPA: 3.46)" 
                  time="2021.08 – 2023.06"
                  details="主修：金融衍生工具、风险管理、机器学习、智能财务等。"
                />
                <EduCard 
                  school="山东财经大学" 
                  degree="信用管理学士 (GPA: 3.76)" 
                  time="2016.09 – 2020.06"
                  details="主修：信用风险管理、计量经济学、金融信托、投资项目评估等。"
                />
              </div>
            </div>

            {/* 实习/研究项目 */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Award className="text-indigo-500" />
                <h2 className="text-2xl font-bold text-white">研究与实习</h2>
              </div>
              <div className="space-y-4">
                <ProjectSnippet title="海通证券 · 行业研究助理" desc="覆盖光伏、原油数据库，撰写20余份跟踪报告。" />
                <ProjectSnippet title="申港证券 · 债券承做" desc="深度参与项目尽调、材料申报及ABS融资方案设计。" />
                <ProjectSnippet title="年报文本相似度投资策略" desc="基于NLP处理近20年年报，验证文本相似度与收益率关系。" />
                <ProjectSnippet title="期货套保会计研究" desc="论文发表于《国际商务财会》，研究准则演变影响。" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">期待与您交流</h2>
            <p className="text-slate-500">寻找金融交易系统智能化方向的挑战与机遇</p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href={`mailto:${profile.email}`} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Mail size={20} />
            </a>
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer group relative">
              <MessageSquare size={20} />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                微信: 15254109003
              </div>
            </div>
          </div>
          <p className="text-slate-600 text-xs">© 2026 夏雨 · 个人职业作品集 · 基于 React & Tailwind 构建</p>
        </div>
      </footer>
    </div>
  );
};

const EduCard = ({ school, degree, time, details }) => (
  <div className="group">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{school}</h3>
      <span className="text-xs text-slate-500 font-mono">{time}</span>
    </div>
    <p className="text-indigo-300 text-sm mb-2">{degree}</p>
    <p className="text-slate-500 text-xs leading-relaxed">{details}</p>
  </div>
);

const ProjectSnippet = ({ title, desc }) => (
  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all">
    <div className="flex justify-between items-center mb-1">
      <h4 className="text-sm font-bold text-slate-200">{title}</h4>
      <ExternalLink size={12} className="text-slate-600" />
    </div>
    <p className="text-xs text-slate-500">{desc}</p>
  </div>
);

const Layers = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export default App;
