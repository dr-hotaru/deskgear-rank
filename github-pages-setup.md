# GitHub Pages 公開手順

## 事前準備

- GitHubアカウントにログインする
- 新しいリポジトリ名を決める
  - 推奨: `deskgear-rank`
- 公開リポジトリで始める場合、URLは以下の形になる
  - `https://ユーザー名.github.io/deskgear-rank/`

## Web画面だけで公開する手順

1. GitHubで新しいリポジトリを作成する。
2. Repository name に `deskgear-rank` を入れる。
3. Public を選ぶ。
4. `Create repository` を押す。
5. 作成後の画面で `uploading an existing file` を押す。
6. このフォルダ内の以下ファイルをアップロードする。
   - `index.html`
   - `styles.css`
   - `app.js`
   - `operator.html`
   - `privacy.html`
   - `.nojekyll`
   - `README.md`
7. `Commit changes` を押す。
8. リポジトリの `Settings` を開く。
9. 左メニューの `Pages` を開く。
10. `Build and deployment` の Source を `Deploy from a branch` にする。
11. Branch を `main`、フォルダを `/root` にして `Save` する。
12. 数分待つとGitHub PagesのURLが表示される。

## 公開前チェック

- トップページに「広告を含みます」が表示されている
- フッターから運営者情報とプライバシーポリシーへ移動できる
- 楽天リンクを押すと楽天の商品ページへ移動する
- メールアドレスは `[at]` 表記のままになっている
- 本名がページ内に表示されていない

## 更新するとき

1. ローカルで `app.js` などを編集する。
2. GitHubのリポジトリ画面で対象ファイルを開く。
3. 鉛筆アイコンから内容を差し替える。
4. `Commit changes` を押す。
5. 数分後に公開ページへ反映される。
