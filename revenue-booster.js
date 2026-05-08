(() => {
  if (document.querySelector(".revenue-booster")) return;

  const products = [
    {
      title: "ノートPCスタンド",
      body: "まず姿勢改善から始めたい人向け。",
      href: "https://hb.afl.rakuten.co.jp/ichiba/535510e3.60d3c6ea.535510e4.95969934/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwayetto%2Fwtps0006%2F&link_type=picttext",
      img: "https://hbb.afl.rakuten.co.jp/hgb/535510e3.60d3c6ea.535510e4.95969934/?me_id=1411950&item_id=10000152&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fwayetto%2Fcabinet%2Fcompass1732621760.jpg%3F_ex%3D160x160&s=160x160&t=picttext"
    },
    {
      title: "LEDデスクライト",
      body: "夜の作業、読書、資料確認に。",
      href: "https://hb.afl.rakuten.co.jp/ichiba/53552f26.a0509b6c.53552f27.f6a963b8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fartpiece%2Ftd-1%2F&link_type=picttext",
      img: "https://hbb.afl.rakuten.co.jp/hgb/53552f26.a0509b6c.53552f27.f6a963b8/?me_id=1367312&item_id=10000693&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fartpiece%2Fcabinet%2Fss202603%2Fimgrc0149642097.jpg%3F_ex%3D160x160&s=160x160&t=picttext"
    },
    {
      title: "モニターアーム",
      body: "画面を増やす、机を広く使う。",
      href: "https://hb.afl.rakuten.co.jp/ichiba/535525e3.06ca925e.535525e4.62770fd7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanwadirect%2F100-lac006%2F&link_type=picttext",
      img: "https://hbb.afl.rakuten.co.jp/hgb/535525e3.06ca925e.535525e4.62770fd7/?me_id=1195715&item_id=10105119&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsanwadirect%2Fcabinet%2F1%2F100-lac006.jpg%3F_ex%3D160x160&s=160x160&t=picttext"
    }
  ];

  const services = [
    ["回線・ホームルーター", "internet-remote-work.html"],
    ["VPN・セキュリティ", "vpn-remote-work.html"],
    ["レンタルサーバー", "rental-server-remote-work.html"],
    ["AI/Pythonスクール", "ai-python-school-remote-work.html"],
    ["バックアップ", "backup-remote-work.html"]
  ];

  const productCards = products.map(product => `
    <a class="revenue-product" href="${product.href}" target="_blank" rel="nofollow sponsored noopener">
      <img src="${product.img}" alt="${product.title}">
      <span><strong>${product.title}</strong><small>${product.body}</small></span>
    </a>
  `).join("");

  const serviceLinks = services.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

  const box = document.createElement("section");
  box.className = "revenue-booster";
  box.innerHTML = `
    <div>
      <p class="label">広告を含みます</p>
      <h2>在宅ワーク環境をまとめて整える</h2>
      <p>商品は楽天リンクで今すぐ比較できます。回線、VPN、サーバー、学習などの高単価サービスは、提携後に広告リンクへ差し替えやすい導線としてまとめています。</p>
    </div>
    <div class="revenue-products">${productCards}</div>
    <div class="revenue-services">${serviceLinks}</div>
  `;

  const footer = document.querySelector("footer");
  if (footer) footer.insertAdjacentElement("beforebegin", box);
})();
