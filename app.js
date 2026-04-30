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

const supplementalProducts = [
  ...buildSupplementalProducts("ノートPCスタンド", [
    ["アルミZ型ノートPCスタンド", 2480, "ノートPCスタンド Z型 アルミ 高さ調整", "自宅据え置きで安定感を重視したい人", "高さ調整しやすいZ型の候補。外部キーボードと合わせると姿勢を整えやすくなります。", "重量があるため持ち運び用途には向きにくいです。"],
    ["軽量折りたたみPCスタンド", 1680, "ノートPCスタンド 軽量 折りたたみ 持ち運び", "外出先でも使いたい人", "薄型で持ち運びやすい候補。カフェや出張先での作業にも合わせやすいです。", "軽量タイプは大型PCで揺れやすい場合があります。"],
    ["17インチ対応PCスタンド", 3280, "ノートPCスタンド 17インチ 対応 放熱", "大きめのノートPCを使う人", "17インチ級のPCを置きたい人向け。放熱性や幅を確認して選びます。", "対応インチだけでなく耐荷重も確認が必要です。"],
    ["タブレット兼用PCスタンド", 1980, "PCスタンド タブレット兼用 角度調整", "PCとタブレットを併用する人", "ノートPCとタブレットの両方で使える候補。用途を分けたい人に向きます。", "タブレット用の溝がPC作業時に合わない場合があります。"],
    ["木製ノートPCスタンド", 3980, "木製 ノートPCスタンド デスク インテリア", "見た目も重視したい人", "デスクの雰囲気を整えたい人向け。インテリア性を重視する記事で紹介しやすいです。", "角度調整や収納性は金属製より弱い場合があります。"],
    ["冷却ファン付きPCスタンド", 2980, "ノートPC 冷却台 ファン付き スタンド", "発熱が気になる人", "冷却ファン付きで夏場や高負荷作業の候補になります。", "ファン音やUSB給電の取り回しを確認したい商品です。"],
    ["クランプ式ノートPCトレイ", 4980, "ノートPC トレイ クランプ モニターアーム", "机の上を広く使いたい人", "モニターアームやクランプで机上を空けたい人向けです。", "机の天板厚と固定方式の確認が必須です。"],
    ["縦置きノートPCスタンド", 1880, "ノートPC 縦置き スタンド 収納", "クラムシェル運用をしたい人", "外部モニター利用時にPCを縦置きできる候補です。", "排熱位置とPCの厚みに合うか確認が必要です。"]
  ]),
  ...buildSupplementalProducts("デスクライト", [
    ["クランプ式ワイドデスクライト", 5980, "デスクライト クランプ式 ワイド 調光", "机の上を広く使いたい人", "クランプ固定でベースを置かずに使える候補。広い机やモニター周りに向きます。", "天板の厚みと固定スペースを確認してください。"],
    ["モニターライトバー", 4980, "モニターライト バー デスクライト 調光", "モニター前の手元を照らしたい人", "画面上に設置するタイプ。省スペースで手元を照らしやすい候補です。", "モニター形状によっては設置しにくい場合があります。"],
    ["コードレスLEDデスクライト", 3280, "デスクライト コードレス 充電式 LED", "配線を減らしたい人", "充電式で置き場所を変えやすい候補。寝室や読書灯にも使いやすいです。", "連続点灯時間と充電頻度を確認しましょう。"],
    ["クリップ式デスクライト", 1980, "デスクライト クリップ式 調光 読書", "狭い机や棚で使いたい人", "クリップで固定できる省スペース候補。サブ照明としても使いやすいです。", "固定できる板厚とクリップ跡に注意が必要です。"],
    ["高演色LEDデスクライト", 6980, "デスクライト 高演色 Ra95 LED", "色味を確認する作業が多い人", "高演色性を重視した候補。手芸やイラスト作業にも訴求しやすいです。", "明るさだけでなく照射範囲も確認してください。"],
    ["学習机向けデスクライト", 3980, "デスクライト 学習机 目に優しい 調光", "勉強や読書で使いたい人", "学習机向けに選びやすい定番候補。明るさ調整と角度調整が比較軸です。", "机のサイズに対してアーム長が合うか確認しましょう。"],
    ["スマホ充電付きデスクライト", 4580, "デスクライト ワイヤレス充電 USB 付き", "充電周りもまとめたい人", "スマホ充電やUSB給電をまとめたい人向けの候補です。", "充電速度や対応端末は商品ページで確認が必要です。"]
  ]),
  ...buildSupplementalProducts("Webカメラ", [
    ["リングライト付きWebカメラ", 2980, "Webカメラ リングライト付き フルHD", "暗い部屋で会議する人", "ライト付きで顔の暗さを補いやすい候補。オンライン会議向けに扱いやすいです。", "ライトの明るさが強すぎないか確認しましょう。"],
    ["オートフォーカスWebカメラ", 3980, "Webカメラ オートフォーカス 1080P", "資料や手元を映す人", "オートフォーカス対応を探したい人向け。手元撮影にも使いやすい候補です。", "会議だけなら固定フォーカスで十分な場合もあります。"],
    ["広角Webカメラ", 3480, "Webカメラ 広角 90度 1080P", "複数人や広めに映したい人", "広角で部屋や複数人を映しやすい候補です。", "広角すぎると背景が映り込みやすくなります。"],
    ["プライバシーカバー付きWebカメラ", 2480, "Webカメラ プライバシーカバー マイク付き", "カメラの目隠しを重視したい人", "物理カバー付きで安心感を出しやすい候補です。", "カバーの開閉しやすさを確認しましょう。"],
    ["三脚対応Webカメラ", 3280, "Webカメラ 三脚穴 1080P", "設置位置を自由に変えたい人", "三脚穴付きで配置を調整しやすい候補です。", "三脚は別売りの場合があります。"],
    ["4K対応Webカメラ", 6980, "Webカメラ 4K 自動光補正", "画質を重視したい人", "高画質を重視したい人向け。面接や配信寄りの記事でも使えます。", "回線やアプリ側が4Kに対応しない場合があります。"],
    ["マイク強化Webカメラ", 4480, "Webカメラ ノイズキャンセリング マイク", "音声もまとめたい人", "内蔵マイクのノイズ低減を重視した候補です。", "音質重視なら外部マイクも比較しましょう。"]
  ]),
  ...buildSupplementalProducts("モニターアーム", [
    ["デュアルモニターアーム", 6980, "モニターアーム デュアル 32インチ", "2画面環境を整えたい人", "2枚のモニターをまとめて支えたい人向け。机上スペースを大きく空けやすいです。", "左右の耐荷重と机の固定条件を確認しましょう。"],
    ["白いモニターアーム", 4980, "モニターアーム 白 シングル 32インチ", "白いデスク環境に合わせたい人", "デスクの色味を揃えたい人に向く候補です。", "白色モデルは在庫や価格が変動しやすいです。"],
    ["低価格ガス式モニターアーム", 3980, "モニターアーム ガス式 安い シングル", "初めて導入する人", "ガス式を低予算で試したい人向け。高さ調整のしやすさが比較軸です。", "安価なモデルは固定力のレビュー確認が重要です。"],
    ["高耐荷重モニターアーム", 7980, "モニターアーム 高耐荷重 12kg 32インチ", "重めのモニターを使う人", "重量のあるモニターを支えたい人向けです。", "対応VESA規格と耐荷重を必ず確認してください。"],
    ["ポール式モニターアーム", 3580, "モニターアーム ポール式 シングル", "高さを固定して使いたい人", "ポール式で高さを安定させたい人向けの候補です。", "細かな上下調整はガス式より手間がかかる場合があります。"],
    ["ノートPCトレイ付きモニターアーム", 5980, "モニターアーム ノートPC トレイ 付き", "PCと外部モニターを並べたい人", "ノートPCとモニターをまとめて配置したい人向けです。", "トレイの耐荷重と放熱性を確認しましょう。"],
    ["壁掛けモニターアーム", 4980, "モニターアーム 壁掛け VESA", "机に固定できない人", "壁面に固定して机を広く使いたい人向けです。", "壁の強度と取り付け作業の可否を確認してください。"]
  ])
];

const allProducts = products.concat(supplementalProducts);

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

function buildSupplementalProducts(category, items) {
  return items.map(([name, price, searchKeyword, bestFor, summary, weakness], index) => ({
    name,
    category,
    price,
    priceNote: "楽天検索リンク / 価格目安",
    score: 82 - index,
    commissionScore: 50 + Math.max(0, 8 - index),
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    searchKeyword,
    bestFor,
    summary,
    weakness
  }));
}

function moshimoPlaceholderUrl(product) {
  if (!affiliateConfig.moshimoRakutenAid || affiliateConfig.moshimoRakutenAid.includes("YOUR_")) {
    return affiliateConfig.disclosureUrl;
  }
  const keyword = encodeURIComponent(product.searchKeyword);
  return `https://af.moshimo.com/af/c/click?a_id=${affiliateConfig.moshimoRakutenAid}&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F${keyword}%2F`;
}

function buildCategories() {
  const categories = [...new Set(allProducts.map((product) => product.category))];
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

  const filtered = allProducts.filter((product) => {
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

  const groupedProducts = groupByCategory(visibleProducts);
  for (const [category, categoryProducts] of groupedProducts) {
    const section = document.createElement("section");
    section.className = "genre-block";
    section.innerHTML = `
      <div class="genre-title">
        <h3>${category}</h3>
        <p>上位10件をスコア順で掲載</p>
      </div>
      <div class="genre-products"></div>
    `;

    const genreGrid = section.querySelector(".genre-products");
    categoryProducts.slice(0, 10).forEach((product, index) => {
      genreGrid.appendChild(createProductCard(product, index));
    });
    grid.appendChild(section);
  }

  visibleProducts.forEach((product) => {
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

function createProductCard(product, index) {
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
  return card;
}

function groupByCategory(visibleProducts) {
  const grouped = new Map();
  visibleProducts.forEach((product) => {
    if (!grouped.has(product.category)) grouped.set(product.category, []);
    grouped.get(product.category).push(product);
  });
  return [...grouped.entries()].map(([category, categoryProducts]) => [
    category,
    categoryProducts.sort((a, b) => b.score - a.score)
  ]);
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
