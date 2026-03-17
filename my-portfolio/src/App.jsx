function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        夏雨 · AI金融产品经理
      </h1>

      <p className="mb-8 text-gray-300">
        专注银行间交易智能化、AI交易执行系统、前置风控设计
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">核心项目</h2>

        <div className="bg-gray-800 p-6 rounded-xl mb-4">
          <h3 className="text-xl font-bold">
            AI询报价机器人
          </h3>
          <p className="text-gray-400 mt-2">
            基于NLP + 决策引擎，实现银行间现券/IRS自动询价与交易执行
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            多资产OMS系统
          </h3>
          <p className="text-gray-400 mt-2">
            构建统一订单管理与前置风控体系，支持自动化交易链路
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">联系我</h2>
        <p>Email: 1196350794@qq.com</p>
      </section>
    </div>
  );
}

export default App;
