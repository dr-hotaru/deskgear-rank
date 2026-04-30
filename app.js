const affiliateConfig = {
  moshimoRakutenAid: "YOUR_MOSHIMO_RAKUTEN_A_ID",
  moshimoYahooAid: "YOUR_MOSHIMO_YAHOO_A_ID",
  disclosureUrl: "#disclosure"
};

const products = [
  {
    name: "Deoway 折りたたみ式ノートPCスタンド",
    category: "ノートPCスタンド",
    price: 1120,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 94,
    commissionScore: 62,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53550a92.26252a26.53550a93.fa5b1acf/?me_id=1427041&item_id=10000036&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fdeoway%2Fcabinet%2F10752305%2F10752325%2F10803729%2Fimgrc0099463073.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53550a92.26252a26.53550a93.fa5b1acf/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdeoway%2Fb0cb7tvy3d%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "ノートPCスタンド 折りたたみ アルミ",
    bestFor: "まず低予算で姿勢改善を試したい人",
    summary: "1,000円台で試しやすい折りたたみ式。軽量、角度調整、収納袋付きで、最初の比較記事の導入商品に向いています。",
    weakness: "軽量タイプなので、重い大型ノートPCでは安定感を確認したい商品です。"
  },
  {
    name: "WAYetTO 折りたたみ式ノートPCスタンド",
    category: "ノートPCスタンド",
    price: 2980,
    priceNote: "税込・送料別 / 2026年4月30日時点",
    score: 91,
    commissionScore: 66,
    image: "https://hbb.afl.rakuten.co.jp/hgb/535510e3.60d3c6ea.535510e4.95969934/?me_id=1411950&item_id=10000152&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fwayetto%2Fcabinet%2Fcompass1732621760.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/535510e3.60d3c6ea.535510e4.95969934/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwayetto%2Fwtps0006%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "ノートPCスタンド 高さ 角度 調節 アルミ",
    bestFor: "レビューや販売実績を重視して選びたい人",
    summary: "高さと角度を調整できるアルミ系スタンド。15.6から17インチ級までの訴求があり、在宅ワーク向け記事の主力候補です。",
    weakness: "送料やクーポン条件で実質価格が変わるため、購入前の確認を促す必要があります。"
  },
  {
    name: "heallite 自然光ワイドデスクライト",
    category: "デスクライト",
    price: 14980,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 94,
    commissionScore: 86,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53552edd.c77d2550.53552ede.524da9f2/?me_id=1302564&item_id=10000296&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fheallite%2Fcabinet%2Fd0131%2Fimg%2Fd0132-2.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53552edd.c77d2550.53552ede.524da9f2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fheallite%2Fd0132%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "自然光 デスクライト ワイド 高演色性",
    bestFor: "デュアルモニター環境や広い机をまとめて照らしたい人",
    summary: "自然光、ワイド照射、高演色性、無段階調光を訴求できる高単価モデル。収益単価を上げる主力候補です。",
    weakness: "価格が高めなので、広い照射範囲が必要な読者に絞ってすすめるのが無難です。"
  },
  {
    name: "TOKIDO 5関節ワイドLEDデスクライト",
    category: "デスクライト",
    price: 7980,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 91,
    commissionScore: 78,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53552efd.d4faa2bc.53552efe.a94e6414/?me_id=1410085&item_id=10000966&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftokido%2Fcabinet%2F12028924%2F001.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53552efd.d4faa2bc.53552efe.a94e6414/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftokido%2Ftkd59%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "デスクライト 5関節 ワイド Ra95",
    bestFor: "角度調整と広範囲照明を両立したい人",
    summary: "調光調色、Ra95、1700ルーメン、5関節を訴求できる中価格帯モデル。作業机向けの比較で扱いやすいです。",
    weakness: "多関節タイプは設置スペースと可動域が合うか事前確認が必要です。"
  },
  {
    name: "artpiece 折り畳み式LEDデスクライト",
    category: "デスクライト",
    price: 2780,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 87,
    commissionScore: 60,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53552f26.a0509b6c.53552f27.f6a963b8/?me_id=1367312&item_id=10000693&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fartpiece%2Fcabinet%2Fss202603%2Fimgrc0149642097.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53552f26.a0509b6c.53552f27.f6a963b8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fartpiece%2Ftd-1%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "デスクライト LED 折り畳み式 5段階調色",
    bestFor: "低予算で調光調色つきライトを選びたい人",
    summary: "5段階調色、無段階調光、タッチセンサー、折り畳み式を訴求できる低価格モデル。比較表の低価格枠に向いています。",
    weakness: "コンパクト型なので、広いデスク全体を照らす用途では上位モデルと比較したい商品です。"
  },
  {
    name: "PAYOFF 4K/フルHD Webカメラ",
    category: "Webカメラ",
    price: 1226,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 87,
    commissionScore: 57,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53551e9c.3a07082e.53551e9d.1fa1b49f/?me_id=1388158&item_id=10105201&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fpayoff%2Fcabinet%2Fmuryou_11%2Fb11194.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53551e9c.3a07082e.53551e9d.1fa1b49f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpayoff%2Fpk11194%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "Webカメラ 4K フルHD マイク付き",
    bestFor: "低予算で外付けカメラを試したい人",
    summary: "小型、広角、マイク付き、自動光補正をうたう低価格モデル。オンライン会議向けの入門候補として紹介しやすい商品です。",
    weakness: "低価格帯のため、画質やマイク品質は上位機と比較して確認が必要です。"
  },
  {
    name: "ecoecoearth HD1080P Webカメラ",
    category: "Webカメラ",
    price: 1250,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 85,
    commissionScore: 55,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53552370.c3d6a3f3.53552371.8bbc7c97/?me_id=1255217&item_id=10065195&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fecoecoearth%2Fcabinet%2Fmany3%2F164f0820.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53552370.c3d6a3f3.53552371.8bbc7c97/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fecoecoearth%2F164f080199d-a-xxxx-3%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "WEBカメラ HD1080P 200万画素 広角",
    bestFor: "会議やオンライン授業用に最低限の画質を確保したい人",
    summary: "HD1080P、200万画素、90度広角、USB接続を軸に比較できるアウトレット品。価格重視の記事に向いています。",
    weakness: "アウトレット品なので、保証や状態、在庫の確認を強めに促す必要があります。"
  },
  {
    name: "EMEET C960 Webカメラ",
    category: "Webカメラ",
    price: 2699,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 92,
    commissionScore: 64,
    image: "https://hbb.afl.rakuten.co.jp/hgb/5355237e.02557db3.5355237f.54fa4f4c/?me_id=1432314&item_id=10000020&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Femeet-creative%2Fcabinet%2Fimgrc0134141854.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/5355237e.02557db3.5355237f.54fa4f4c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femeet-creative%2Fc960%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "EMEET C960 Webカメラ HD1080P",
    bestFor: "安さだけでなく定番感も重視したい人",
    summary: "HD1080P、200万画素、90度広角、内蔵マイク、自動光補正に対応。Webカメラ比較記事の主力候補です。",
    weakness: "価格が変動しやすいので、セール時と通常時の価格差に注意が必要です。"
  },
  {
    name: "サンワダイレクト 100-LAC003 モニターアーム",
    category: "モニターアーム",
    price: 4980,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 93,
    commissionScore: 74,
    image: "https://hbb.afl.rakuten.co.jp/hgb/535525e3.06ca925e.535525e4.62770fd7/?me_id=1195715&item_id=10101929&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsanwadirect%2Fcabinet%2F1%2F100-lac003.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/535525e3.06ca925e.535525e4.62770fd7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanwadirect%2F100-lac003%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "モニターアーム シングル ガス 32インチ",
    bestFor: "32インチまでのモニターをしっかり支えたい人",
    summary: "ガス式、32インチ対応、耐荷重12kgまでをうたうシングルアーム。単価を上げる商品として記事内に置きやすいです。",
    weakness: "机の天板厚や設置方式が合うか、購入前確認が必要です。"
  },
  {
    name: "サンワダイレクト 100-LAC006 縦型モニターアーム",
    category: "モニターアーム",
    price: 3980,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 89,
    commissionScore: 70,
    image: "https://hbb.afl.rakuten.co.jp/hgb/535525e3.06ca925e.535525e4.62770fd7/?me_id=1195715&item_id=10105119&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsanwadirect%2Fcabinet%2F1%2F100-lac006.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/535525e3.06ca925e.535525e4.62770fd7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanwadirect%2F100-lac006%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "モニターアーム 縦 シングル 32インチ",
    bestFor: "縦配置や省スペース化を重視したい人",
    summary: "縦方向の調整を訴求しやすいクランプ式アーム。デスクを広く使いたい読者向けに紹介できます。",
    weakness: "耐荷重は2から8kgまでなので、重いモニターでは適合確認が必要です。"
  },
  {
    name: "SAKURA GARAGE NB ERGONOMIC モニターアーム",
    category: "モニターアーム",
    price: 2980,
    priceNote: "税込・送料無料 / 2026年4月30日時点",
    score: 88,
    commissionScore: 68,
    image: "https://hbb.afl.rakuten.co.jp/hgb/53552605.f7a5b423.53552606.0b58f473/?me_id=1435724&item_id=10000073&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsakuragarage%2Fcabinet%2Fgoods%2Fmonitorarm%2Fa5%2Fa5_1.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/53552605.f7a5b423.53552606.0b58f473/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsakuragarage%2Fmonitorarma5%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==",
    searchKeyword: "NB ERGONOMIC モニターアーム 32インチ",
    bestFor: "低予算でモニターアームを導入したい人",
    summary: "24から32インチ、耐荷重9kg、クランプ式とグロメット式対応をうたうコスパ寄りの候補です。",
    weakness: "低価格帯なので、可動域や固定力のレビュー確認を促すと安心です。"
  }
];

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const grid = document.querySelector("#productGrid");
const compareBody = document.querySelector("#compareBody");
const categorySelect = document.querySelector("#category");
const budgetSelect = document.querySelector("#budget");
const sortSelect = document.querySelector("#sort");

function rakutenUrl(product) {
  if (product.rakutenUrl) return product.rakutenUrl;
  const keyword = encodeURIComponent(product.searchKeyword);
  return `https://search.rakuten.co.jp/search/mall/${keyword}/`;
}

function moshimoPlaceholderUrl(product) {
  if (!affiliateConfig.moshimoRakutenAid || affiliateConfig.moshimoRakutenAid.includes("YOUR_")) {
    return affiliateConfig.disclosureUrl;
  }
  const keyword = encodeURIComponent(product.searchKeyword);
  return `https://af.moshimo.com/af/c/click?a_id=${affiliateConfig.moshimoRakutenAid}&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${keyword}%2F`;
}

function buildCategories() {
  const categories = [...new Set(products.map((product) => product.category))];
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  }
}

function getFilteredProducts() {
  const category = categorySelect.value;
  const budget = budgetSelect.value;
  const sort = sortSelect.value;

  const filtered = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const budgetMatch = budget === "all" || product.price <= Number(budget);
    return categoryMatch && budgetMatch;
  });

  return filtered.sort((a, b) => {
    if (sort === "priceAsc") return a.price - b.price;
    if (sort === "commission") return b.commissionScore - a.commissionScore;
    return b.score - a.score;
  });
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();
  grid.innerHTML = "";
  compareBody.innerHTML = "";

  visibleProducts.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="rank">#${index + 1}</span>
      </div>
      <div class="product-body">
        <div class="meta">
          <span class="chip">${product.category}</span>
          <span class="chip">スコア ${product.score}</span>
        </div>
        <h3>${product.name}</h3>
        <p class="price">${yen.format(product.price)}</p>
        <p class="price-note">${product.priceNote}</p>
        <p class="summary">${product.summary}</p>
        <p class="weak">注意: ${product.weakness}</p>
        <div class="cta-row">
          <a class="cta rakuten" href="${rakutenUrl(product)}" target="_blank" rel="nofollow sponsored noopener">楽天で購入</a>
          <a class="cta moshimo" href="${moshimoPlaceholderUrl(product)}" rel="nofollow sponsored noopener">もしも用</a>
        </div>
      </div>
    `;
    grid.appendChild(card);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${yen.format(product.price)}<br><small>${product.priceNote}</small></td>
      <td>${product.bestFor}</td>
      <td>${product.weakness}</td>
    `;
    compareBody.appendChild(row);
  });

  injectStructuredData(visibleProducts);
}

function injectStructuredData(visibleProducts) {
  const oldScript = document.querySelector("#structuredData");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "structuredData";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "在宅ワーク向けガジェット比較",
    itemListElement: visibleProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product.summary,
        offers: {
          "@type": "Offer",
          priceCurrency: "JPY",
          price: product.price,
          availability: "https://schema.org/InStock",
          url: rakutenUrl(product)
        }
      }
    }))
  });
  document.head.appendChild(script);
}

categorySelect.addEventListener("change", renderProducts);
budgetSelect.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);

buildCategories();
renderProducts();
