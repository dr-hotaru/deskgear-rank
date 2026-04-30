# Affiliate Starter Site

楽天アフィリエイトともしもアフィリエイトで短期収益化を始めるための静的な物販比較サイトです。

## 使い方

1. `index.html` をブラウザで開きます。
2. `app.js` の `affiliateConfig` を自分のIDに差し替えます。
3. `products` 配列の商品、価格、紹介文、リンク先を実案件に合わせて更新します。
4. 記事を増やす場合は `content-plan.md` の順番で作ると、内部リンクを組みやすいです。

## 差し替える場所

`app.js`

```js
const affiliateConfig = {
  rakutenAffiliateId: "YOUR_RAKUTEN_AFFILIATE_ID",
  moshimoRakutenAid: "YOUR_MOSHIMO_RAKUTEN_A_ID",
  moshimoYahooAid: "YOUR_MOSHIMO_YAHOO_A_ID",
  disclosureUrl: "#disclosure"
};
```

最初は楽天リンクだけでも運用できます。もしも側で楽天市場・Yahoo!ショッピング・Amazonの提携が完了したら、各ボタンを実リンクへ差し替えてください。

## 注意

価格、在庫、レビュー数、ランキング表現は定期更新してください。広告を含むページでは、ページ上部に広告表記を置いてください。

## GitHub Pages

公開手順は `github-pages-setup.md` を参照してください。
